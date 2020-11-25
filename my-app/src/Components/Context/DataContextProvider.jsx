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
<<<<<<< HEAD
            //change LoggedUser to logedUserData
            loggedUser:null,
            //Registerd users Data
            usersData: null,
            //loged-in user id
            currentUserData:null
=======
            loggedUserData:[],
            usersData: [],
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
        };

        this.authenticateUser = this.authenticateUser.bind(this);
        this.addUserData = this.addUserData.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
    }

    authenticateUser(data) {
<<<<<<< HEAD
        let { email, password } = data;
        let { usersData } = this.state;
        let auth = false;

        for (let i = 0; i < usersData.length ; i++) {
            
            if (usersData[i].email === email && usersData[i].password === password) {
                    this.setState({
                        isAuth: true,
                        //add this
=======
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
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
                        loggedUserData:usersData[i]
                    }); 
                    auth = true   
                    break  
<<<<<<< HEAD
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
=======
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
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
                user_id,
                email,
                username,
                fullName,
                password,
                avatar_img,
                follower_count,
                following_users,
<<<<<<< HEAD
            })
            .then((res) => {
                this.setState({
                    isLoading: false,
                    error: false,
                });
                console.log(res);
            })
=======
            })
            .then((res) => {
                this.setState({
                    isLoading: false,
                    error: false,
                });
                console.log(res);
            })
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
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
<<<<<<< HEAD
            .get("http://localhost:3004/users")
=======
            .get("http://localhost:3000/users")
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44

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
<<<<<<< HEAD
        //remove userdata and add logedUserData
        let { isAuth, error, isLoading,regUser,loggedUserData} = this.state;
        let { authenticateUser, addUserData ,checkEmail} = this;
        let value = { authenticateUser, addUserData,checkEmail, isAuth, error, isLoading,regUser ,loggedUserData};
=======
        let { isAuth, error, isLoading, usersData ,regUser} = this.state;
        //console.log(loggedUserData, "my da");
        let { authenticateUser, addUserData ,checkEmail} = this;
        let value = { authenticateUser, addUserData,checkEmail, isAuth, error, isLoading,regUser };
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
        return (
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        );
    }
}

<<<<<<< HEAD
export { DataContextProvider };
=======
export { DataContextProvider };
>>>>>>> 05154421ca7c50e7ec11c5c4c2b6f3d07127df44
