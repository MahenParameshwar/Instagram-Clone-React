import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../Context/DataContextProvider";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            checkmail:""
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { email, username, password ,checkmail} = this.state;
        
        let { addUserData ,checkEmail} = this.context;
        let out = checkEmail(email)   //check email already exists or not if exists redirects to login page
        this.setState({
            checkmail:out
        })

        // if(ans){

            
        //     let {history} = this.props;
            
        //     history.push("/")
        // }

        if(!ans){
            
            let user_id = uuid();
            let payload = {
                user_id,
                email,
                username,
                password,
                following_users: [],
                avatar_img: "",
                follower_count: "",
            };
    
            addUserData(payload); // adding registred user data to our database

        }
       
        
    };

    render() {
        let { email, username, password ,checkmail} = this.state;
        

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        placeholder="email"
                        onChange={this.handleChange}
                        name="email"
                        required
                    />{" "}
                    <br />
                    <input
                        type="username"
                        value={username}
                        placeholder="username"
                        onChange={this.handleChange}
                        name="username"
                        required
                    />{" "}
                    <br />
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={this.handleChange}
                        name="password"
                        required
                    />{" "}
                    <br />
                    <input type="submit" value="sign up" />
                </form>

                { 
                    checkmail && <div> email already exists ! login </div>
    
                    
                    let {history} = this.props
                    history.push("/")
                    
                   
                    
                }

            </>
        );
    }
}

Registration.contextType = DataContext;

export { Registration };
