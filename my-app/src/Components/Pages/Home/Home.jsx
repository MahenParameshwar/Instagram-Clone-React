import React, { Component } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import {UserPost } from "./Post/UserPost";


class Home extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {getPosts} = this.context
    
       // console.log(getUsers)
        return(
            <div>
                <div >
                    {
                        getPosts()?.map((item)=>{
                            return(
                            <UserPost key={item.post_id} item={item}/>  
                            
                            )
                        })

                    }
                </div>
            </div>

        )
    }
}

Home.contextType = DataContext
export {Home}