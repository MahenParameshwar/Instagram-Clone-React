import {Component, React} from "react";
import { Redirect, Route } from "react-router-dom";
import { DataContext } from "../Context/DataContextProvider";

const PrivateRoute = ({Component, ...rest}) => {
    return(
        <DataContext.Consumer>
            {
                
                ({isAuth}) => {
                    return isAuth ? (
                        //Spread Rest Operator
                        <Route {...rest} render = { (props) => <Component {...props}/>} />
                    ) :

                    (<Redirect to = "/login" />)
                }
            }
        </DataContext.Consumer>
    )
}

export {PrivateRoute}