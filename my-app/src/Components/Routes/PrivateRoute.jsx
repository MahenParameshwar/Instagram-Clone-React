<<<<<<< HEAD
import { React} from "react";
=======
import {Component, React} from "react";
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
import { Redirect, Route } from "react-router-dom";
import { DataContext } from "../Context/DataContextProvider";

const PrivateRoute = ({Component, ...rest}) => {
    return(
        <DataContext.Consumer>
            {
<<<<<<< HEAD
                
                ({isAuth}) => {
                    return isAuth ? (
                        //Spread Rest Operator
                        <Route {...rest} render = { (props) => <Component {...props}/>} />
=======
                ({isAuth}) => {
                    return isAuth ? (
                        <Route path = {rest} render = { (props) => <Component {...props}/>} />
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
                    ) :

                    (<Redirect to = "/login" />)
                }
            }
        </DataContext.Consumer>
    )
}

export {PrivateRoute}