import React, { Component } from "react";
import { Redirect,Link } from "react-router-dom";
import { DataContext } from "../../Context/DataContextProvider";
import styles from "./Login.module.css";
import {Or} from "./OR";
import {FbIcon} from "./FbIcon"
import {InstaImg} from "./InstaImg"

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let { email, password } = this.state;
        let { authenticateUser } = this.context;
        authenticateUser({ email, password });
    }

    render() {
        let { isAuth, isLoading , error} = this.context;
        let { email, password } = this.state;
        return isLoading ? (
            <div>...loading pls wait</div>
        ) : !isAuth ? (
            <>
            <div className={styles.mainDiv}>
                <InstaImg/>

                <form className={styles.form} onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            className={styles.input}
                            type="email"
                            value={email}
                            name="email"
                            placeholder="email"
                            onChange={this.handleChange}
                        />{" "}
                    </div>

                    <div>
                        <input
                            className={styles.input}
                            type="password"
                            value={password}
                            name="password"
                            placeholder="password"
                            onChange={this.handleChange}
                        />{" "}
                    </div>

                    <div>
                        <input
                            className={styles.button}
                            type="submit"
                            value="Login"
                            disabled={
                                email.length === 0 || password.length === 0
                            }
                        />{" "}
                    </div>
                    {error && "something went wrong"}
                </form>

                <div className = {styles.or}>
                    <Or/>
                
                </div>

                <div> 
                    <FbIcon src= "https://www.akaweddings.com.au/wp-content/uploads/2020/02/facebook.png" textColor = "blue"/>
                </div>
                <div>forgot password?</div>

                

            </div>
             <div className = {styles.bottomDiv}>
               <span>Don't have an Account ?</span> <Link to = "/reg">Sign up</Link>


             </div>
            </>

        ) : (
            <Redirect to="/home" />
        );

        
    }
}

Login.contextType = DataContext;
export { Login };