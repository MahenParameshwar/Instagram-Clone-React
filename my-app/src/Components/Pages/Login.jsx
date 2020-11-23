import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { DataContext } from "../Context/DataContextProvider";
import {styles} from   "./Login.module.css";

class Login extends Component{
    constructor(props){
        super(props)
    
        this.state = {
            email:"",
            password:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e) {
        let {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let {email,password} = this.state;
        // let {authenticateUser} = this.context;
        // authenticateUser({email,password})

    }


    render(){
        let {isAuth,isLoading} = this.context;
        let {email,password} = this.state;
        return isLoading ? (<div>...loading pls wait</div>):
         !isAuth ?
        (

            <div>
                <form className = {styles.From} onSubmit={this.handleSubmit}>
                        <input 
                        type="email"
                        value = {email}
                        name = "email"
                        placeholder = "email"
                        onChange = {this.handleChange}/>

                        <input 
                        type="password"
                        value = {password}
                        name = "password"
                        placeholder = "password"
                        onChange = {this.handleChange}/>

                        <input type="submit" value="Login" disabled = {email.length === 0 || password.length === 0}/>
                        {/* {error && "something went wrong"} */}
                    </form>
            </div>
        ) : <Redirect to = "/home"/>
    }
}

Login.contextType = DataContext;
export {Login}