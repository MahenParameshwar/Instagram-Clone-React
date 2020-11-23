import React, { Component } from "react"

export let DataContext = React.createContext();
class DataContextProvider extends Component{
    constructor(props){
        super(props)
        this.state = {
            isAuth:false,
            error:false,
            isLoading:false
        }
    }


    render(){
        let {isAuth,error,isLoading} = this.state;
        let value = {isAuth, error,isLoading}
        return(
            <DataContext.Provider value = {value}>
                {this.props.children} 
            </DataContext.Provider>
        )
    }
}

export {DataContextProvider}

