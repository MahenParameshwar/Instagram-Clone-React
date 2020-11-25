import React, { Component } from "react";
import axios from "axios";

export let DataContext = React.createContext();
class DataContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            error: false,
            isLoading: false,
            loggedUserData:[],
            usersData: [],
        };

        this.authenticateUser = this.authenticateUser.bind(this);
        this.addUserData = this.addUserData.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
    }

    authenticateUser(data) {
        console.log(data);
        let { email, password } = data;
        let { usersData } = this.state;
        let auth = false;
        console.log(usersData.length, "length");
        for (let i = 0; i < usersData.length ; i++) {
            console.log(usersData[i])
            if (usersData[i].email === email && usersData[i].password === password) {
                    this.setState({
                        isAuth: true,
                        loggedUserData:usersData[i]
                    }); 
                    auth = true   
                    break  
            }

            else{
                if(usersData[i].email === email && usersData[i].password !== password){

                    this.setState({
                        error: true
                    }); 
                    auth = true;
                    break 
                }
            }
        }
        return auth
    }

    checkEmail(email)
    {
        console.log(email);
        let {usersData} = this.state;
        for(let i = 0; i < usersData.length-1; i++)
        {
            console.log(usersData[i].email,"chenk here")
            if(email === usersData[i].email)
            {
               
                return true
            }
            else{
                continue
            }
        }

        return false
        
    }

    addUserData(payload) {
        let { isLoading, error } = this.state;
        console.log(payload, "data push");
        let {
            user_id,
            email,
            username,
            fullName,
            password,
            avatar_img,
            follower_count,
            following_users,
        } = payload;
        // this.setState({
        //     usersData:[ ...usersData, payload]
        // })

        this.setState({
            isLoading: true,
        });
        axios
            .post("http://localhost:3000/users", {
                user_id,
                email,
                username,
                fullName,
                password,
                avatar_img,
                follower_count,
                following_users,
            })
            .then((res) => {
                this.setState({
                    isLoading: false,
                    error: false,
                });
                console.log(res);
            })
            .catch((err) => {
                this.setState({
                    error: true,
                    isLoading: false,
                });
            });
    }

    componentDidMount() {
        this.setState({
            isLoading: false,
        });

        axios
            .get("http://localhost:3000/users")

            .then((res) => {
                this.setState({
                    usersData: res.data,
                    isLoading: false,
                });
            })

            .catch((err) =>
                this.setState({
                    error: true,
                    isLoading: false,
                })
            );
    }

    render() {
        let { isAuth, error, isLoading, usersData ,regUser} = this.state;
        //console.log(loggedUserData, "my da");
        let { authenticateUser, addUserData ,checkEmail} = this;
        let value = { authenticateUser, addUserData,checkEmail, isAuth, error, isLoading,regUser };
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export { DataContextProvider };
