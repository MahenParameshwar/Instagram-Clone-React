import { StylesProvider } from '@material-ui/core';
import React, { Component } from 'react';
import { DataContext } from '../Context/DataContextProvider';
import {ExploreItem} from "../Layout/Explore/ExploreItem";
import axios from "axios"
import styles from '../Styles/viewprofile.module.css'
import { GalleryItem } from '../Layout/Gallery';


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
                    <div style={{marginTop:"30px"}}>
                        <h2>Explore</h2>
                        <div >
                            <div className = {styles.gallery}>
                            {
                                
                                    posts?.map(item=><GalleryItem {...item}/>)
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