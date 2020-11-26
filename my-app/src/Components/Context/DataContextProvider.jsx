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
            //change LoggedUser to logedUserData
            loggedUserData:null,
            //Registerd users Data
            usersData: null,
            //loged-in user id
            currentUserData:null
        };
        this.updateLoggedUserData = this.updateLoggedUserData.bind(this)
        this.authenticateUser = this.authenticateUser.bind(this);
        this.addUserData = this.addUserData.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
        this.handelLogOut = this.handelLogOut.bind(this);
    }

    updateLoggedUserData(data){
        this.setState({
            loggedUserData:data
        })
    }

    handelLogOut(){
        this.setState({
            isAuth:false
        })
    }

    authenticateUser(data) {
        let { email, password } = data;
        let { usersData } = this.state;
        let auth = false;

        for (let i = 0; i < usersData.length ; i++) {
            
            if (usersData[i].email === email && usersData[i].password === password) {
                    this.setState({
                        isAuth: true,
                        //add this
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
        
        let {usersData} = this.state;
        //Change length-1 to length
        for(let i = 0; i < usersData.length; i++)
        {
            
            if(email === usersData[i].email)
            {
                return true;
            }
            else
            {
                continue;
            }
        }

        return false;
        
    }

    addUserData(payload) {
        let { isLoading, error } = this.state;
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
        

        this.setState({
            isLoading: true,
        });

        axios
            .post("http://localhost:3004/users", {
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
            .get("http://localhost:3004/users")

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
        //remove userdata and add logedUserData
        let { isAuth, error, isLoading,regUser,loggedUserData} = this.state;
        let { authenticateUser, addUserData ,checkEmail,handelLogOut,updateLoggedUserData} = this;
        let value = { authenticateUser, 
                        addUserData,
                        checkEmail, 
                        isAuth, 
                        error, 
                        isLoading,
                        regUser ,
                        updateLoggedUserData,
                        handelLogOut,
                        loggedUserData,
                    };
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

export { DataContextProvider };
