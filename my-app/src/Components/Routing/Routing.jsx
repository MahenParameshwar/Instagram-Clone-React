import React from "react";
import {Route,Link} from "react-router-dom"
import {Login} from "../Pages/Login/Login"
import {Home} from "../Pages/Home/Home"
import {Registration} from "../Pages/Registration"

const Routing = () => {
    return(
        <>
            <Route path="/" exact render = {() => <Login/>} />
            <Route path="/reg" exact render = {() => <Registration/>} />
            <Route path="/home" exact render = {() => <Home/>} />


        </>
    )
}

export {Routing}