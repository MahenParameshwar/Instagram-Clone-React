import React, { Component } from "react";
import axios from "axios";
import styles from "../Login/Login.module.css"
import { v4 as uuid } from "uuid";
import { DataContext } from "../../Context/DataContextProvider";
import {InstaImg} from "../Login/InstaImg"
import {Link} from "react-router-dom"
import {Or} from "../Login/OR"
import {Header} from "./Header"
import { FbIcon } from "../Login/FbIcon";

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            checkmail:false
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
        console.log(out,"in re");
        this.setState({
            checkmail:out
        })

        
        if(!out)  //if email doesn't exists go inside if and push data
        {
            
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
            console.log(checkmail,"W");
            let {history} = this.props;
            history.push("/")

        }
       
        
    };

    render() {
        let { email, username, password ,checkmail} = this.state;
        

        return (
            <>
                <div className = {styles.mainDiv}>
                    
                    <InstaImg/>
                    <Header/>
                    <FbIcon textColor = "white" color = "dodgerblue" src = "https://www.blindsource.com/images/icons/facebook-icon.jpg"/>
                    <div className = {styles.or}>
                       <Or/>
                
                    </div>

                <form className ={styles.form}  onSubmit={this.handleSubmit}>
                    <input className = {styles.input}
                        type="email"
                        value={email}
                        placeholder="email"
                        onChange={this.handleChange}
                        name="email"
                        required
                    />{" "}
                    <br />
                    <input className = {styles.input}
                        type="username"
                        value={username}
                        placeholder="username"
                        onChange={this.handleChange}
                        name="username"
                        required
                    />{" "}
                    <br />

                    <input  className = {styles.input}
                        type="password"
                        value={password}
                        placeholder="password"
                        onChange={this.handleChange}
                        name="password"
                        required
                    />{" "}
                    <br />
                    <input className = {styles.button}
                      type="submit" 
                      value="sign up" />
                </form>

                </div>

                <div className = {styles.bottomDiv}>
                    <span> have an Account ?</span> <Link to = "/">Log in</Link>


                </div>

                { 
                    checkmail && <div> email already exists ! login </div>
    
                }

            </>
        );
    }
}

Registration.contextType = DataContext;

export { Registration };
