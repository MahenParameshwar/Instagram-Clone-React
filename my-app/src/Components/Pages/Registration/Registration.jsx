import React, { Component } from "react";
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
            email: "test123@gmail.com",
            username: "test",
            password: "123",
            checkmail:false,
            fullName:"Test Test"
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = async  (e) => {
        e.preventDefault();
        let { email, username, password ,checkmail,fullName} = this.state;
        
        let { addUserData ,checkEmail,  reloadUsers} = this.context;
        let out = checkEmail(email)   //check email already exists or not if exists redirects to login page
        
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
                fullName,
                profile_description:"",
                following_users: {},
                liked_posts:{},
                saved_posts:{},
                avatar_img: "",
                follower_count: 0,
            };
    
            addUserData(payload); // adding registred user data to our database
           
            
            let {history} = this.props;
            history.push("/")
            

        }
       
        
    };

    render() {
        let { email, username, password ,checkmail,fullName} = this.state;

        let { isAuth } = this.context;
        
        return ( !isAuth &&
            <>  
              <div className = {styles.wrapper}>
                <div className = {styles.maincontent}>
                    
                    <div className = {styles.header}>
                      <InstaImg/>

                    </div>
                    
                    <Header/>
                    
                    <div>
                    <FbIcon textColor = "white" color = "dodgerblue" src = "https://www.blindsource.com/images/icons/facebook-icon.jpg"/>
                    </div>

                    <div className = {styles.or}>
                       <Or/>
                
                    </div>

                <form   onSubmit={this.handleSubmit}>
                    <div>
                        <input className = {styles.input1}
                            type="email"
                            value={email}
                            placeholder="email"
                            onChange={this.handleChange}
                            name="email"
                            required
                        />{" "}
                    </div>
                    
                    <div>
                        <input className = {styles.input2}
                            type="fullName"
                            value={fullName}
                            placeholder="fullName"
                            onChange={this.handleChange}
                            name="fullName"
                            required
                        />

                    </div>

                    <div>
                        <input className = {styles.input3}
                            type="username"
                            value={username}
                            placeholder="username"
                            onChange={this.handleChange}
                            name="username"
                            required
                        />
                    

                    </div>
                    
                    <div>
                        <input  className = {styles.input4}
                            type="password"
                            value={password}
                            placeholder="password"
                            onChange={this.handleChange}
                            name="password"
                            required
                        />
                    

                    </div>

                    <div>
                        <input className = {styles.btn}
                        type="submit" 
                        value="sign up" />

                    </div>
                   
                    
                    { 
                       checkmail && <div style = {{color:"red"}}>  email already exists ! login </div>
    
                     }

                </form>

                </div>
                    
                <div className = {styles.subcontent}>
                    <div className = {styles.spart}>
                        have an Account ? <Link style = {{color:"dodgerblue"}}  to = "/login">Log in</Link>
                    </div>

                </div>
               

              </div>  
            </>
        );
    }
}

Registration.contextType = DataContext;

export { Registration };
