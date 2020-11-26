import { StylesProvider } from '@material-ui/core';
import React, { Component } from 'react';
import { DataContext } from '../Context/DataContextProvider';
import {ExploreItem} from "../Layout/Explore/ExploreItem";
import axios from "axios"
import styles from '../Styles/explore.module.css'


class Explore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
        }
    }
    

    //On mounting fetch all the posts of the users you are following
    componentDidMount(){
    const {loggedUserData} = this.context;
    const following_users_arr = loggedUserData.following_users;
    
   
    
    axios.get(`http://localhost:3004/posts`)
    .then((res)=>{
        this.setState({
            posts:res.data
        })
    })

    }
    render() {
        const {posts} = this.state
        console.log(posts)
        return (
            <div className="container">
                <main className="main_container">
                    <div >
                        <div  >
                            <div className = {styles.explore}>
                            {
                                    posts?.map(item=><ExploreItem {...item} key={item.post_id} />)
                            }
                              
      
                            </div>
                        </div>
                    </div>

                    
                </main>
            </div>
        );
    }
}

Explore.contextType=DataContext
export default Explore;