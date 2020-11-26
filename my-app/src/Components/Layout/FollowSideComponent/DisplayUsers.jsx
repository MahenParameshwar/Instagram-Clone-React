import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import styles from '../../Styles/suggestion.module.css'
import {  handelFollow } from '../../../Services';
import axios from 'axios'
import { DataContext } from '../../Context/DataContextProvider';

class DisplayUsers extends Component {
    constructor(props) {
        super(props);
        this.unFollowUser = this.unFollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
    }

    async followUser(){
        
        const {user_id} = this.props;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {following_users,id} = loggedUserData;
        following_users[user_id] = true;
        const data = await handelFollow(following_users,id);
        updateLoggedUserData(data);
        
        //update followers count of the user you have followed
        axios.get(`http://localhost:3004/users?user_id=${user_id}`).then(
            (res)=>{
                let {follower_count,id} = res.data[0];
                follower_count++;
                axios.patch(`http://localhost:3004/users/${id}`,{
                    follower_count
                })
            }
        ).catch(err=>console.log(err));
        
    }

    async  unFollowUser(){
        const {user_id} = this.props;
        
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {following_users,id} = loggedUserData;
        delete following_users[user_id];
        const data = await handelFollow(following_users,id);
        updateLoggedUserData(data);
        
        //update followers count of the user you have followed
        axios.get(`http://localhost:3004/users?user_id=${user_id}`).then(
            (res)=>{
                let {follower_count,id} = res.data[0];
                follower_count--;
                axios.patch(`http://localhost:3004/users/${id}`,{
                    follower_count
                })
            }
        ).catch(err=>console.log(err));
    }
    
    render() {
        const {logged_id,user_id,following_users,logged_following_users,username,avatar_img,fullName} =  this.props
        return (
            <div>
            <Avatar
            className={styles.suggestion_avatar_url}
            alt={fullName}
            src={avatar_img}
            />
            <div>
                <div className={styles.username}>
                    {username}
                </div>
                <div className={`${styles.follows} ${styles.grey}`}>
                    {following_users[logged_id] ? "Follows You" : "Suggested" }
                </div>
            </div>
            {
                logged_following_users[user_id] ?
                <button onClick={this.unFollowUser} className={`${styles.btn} ${styles.blue}`}>unfollow</button> :
                <button onClick={this.followUser} className={`${styles.btn} ${styles.blue}`}>follow</button>
            }
        </div>
        );
    }
}

DisplayUsers.contextType = DataContext

export default DisplayUsers;