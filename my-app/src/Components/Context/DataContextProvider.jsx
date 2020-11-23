import React, { Component } from "react"
import axios from "axios";


export let DataContext = React.createContext();
class DataContextProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuth:false,
            error:false,
            isLoading:false,
            usersData:[]
        }

        this.authenticateUser = this.authenticateUser.bind(this);
    }

    authenticateUser(data)
    {
        console.log(data)
        let {email,password} = data;
        let {usersData} = this.state;
        console.log(usersData.length,"length");
        for(let i = 0; i < usersData.length-1; i++){
            console.log(i);
            console.log(usersData[i].email, usersData[i].password);
            if(usersData[i].email === email && usersData[i].password === password){
                console.log(usersData[i].email === email && usersData[i].password === password)
                this.setState({
                    isAuth:true
                })
            }
        }
          


    }

    componentDidMount(){
        this.setState({
            isLoading:false
        })

        axios.get("http://localhost:3000/users")

          .then( res => {
        
                this.setState({
                usersData:res.data,
                isLoading:false

               })
            })

          .catch( err => this.setState({
              error:true,
              isLoading:false
          }))
    }




    render(){

        let {isAuth,error,isLoading,usersData} = this.state;
        console.log(usersData,"my da")
        let {authenticateUser} = this
        let value = {authenticateUser,isAuth, error,isLoading}
        return(
            <DataContext.Provider value = {value}>
                {this.props.children} 
            </DataContext.Provider>
        )
    }
}

export {DataContextProvider}

