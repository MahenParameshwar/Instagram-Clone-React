import React from "react";
import {Route,Link} from "react-router-dom"
import {Login} from "../Pages/Login/Login"
import {Home} from "../Pages/Home/Home"

const Routing = () => {
    return(
        <>
            <Route path="/" exact render = {() => <Login/>} />
            <Route path="/home" exact render = {() => <Home/>} />


        </>
    )
}

export {Routing}