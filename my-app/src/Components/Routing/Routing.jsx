import React from "react";
import {Route,Link} from "react-router-dom"
import {Login} from "../Pages/Login"
import {Home} from "../Pages/Home"

const Routing = () => {
    return(
        <>
            <Route path="/" exact render = {() => <Login/>} />
            <Route path="/home" exact render = {() => <Home/>} />


        </>
    )
}

export {Routing}