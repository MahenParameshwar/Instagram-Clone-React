import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import styles from '../../Styles/suggestion.module.css'
import { DataContext } from '../../Context/DataContextProvider';
import DisplayUsers from './DisplayUsers';

class FollowSuggestion extends Component {
    render() {
        const {loggedUserData,usersData} = this.context;
       
        const {avatar_img,fullName,username,user_id,following_users} = loggedUserData;
        
        return (
            <div className={styles.follow_container}>
                <div className={styles.top}>
                    <Avatar
                    className={styles.avatar_url}
                    alt={fullName}
                    src={avatar_img}
                    />
                    <div>
                    <div className={styles.username}>{username}</div>
                    <div className={`${styles.fullname} ${styles.grey}`}>{fullName}</div>
                    </div>
                    <button className={`${styles.btn} ${styles.blue}`}>Switch</button>
                </div>
                <div className={styles.middle}>
                    <div className={styles.suggested}>Suggested For You</div>
                    <button className={`${styles.btn} black`}>See All</button>
                </div>
                <div className={styles.bottom}>
                    
                    {
                        usersData.filter((user)=>user_id !== user.user_id).map((user)=>{
                            return <DisplayUsers key={user.user_id} {...user} logged_id={user_id} logged_following_users = {following_users} />
                        })
                    }

                </div>
            </div>
        );
    }
}

FollowSuggestion.contextType = DataContext
export default FollowSuggestion;