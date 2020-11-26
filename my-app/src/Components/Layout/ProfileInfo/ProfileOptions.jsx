import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'
class ProfileOptions extends Component {
    
    render() {
        const {
                user_id,
                username,
                history,
                loggedUserName,
                following_users,
                unFollowUser,
                followUser
            } = this.props
        
        return (
            <div className={styles.profile_user_settings}>
                <h1>
                    {username}
                </h1>
            <button className={styles.profile_btn}>Message</button>
            {
            loggedUserName === username ?
            <button onClick={()=>history.push('/uploadPost')}
            className={styles.profile_btn}>
                Upload
            </button> 
            : 
            <>
                {
                    following_users[user_id] ? 
                    <button className={styles.profile_btn} onClick={()=>unFollowUser()}>Unfollow</button> :
                    <button className={styles.profile_btn} onClick={()=>followUser()}>Follow</button>
                    
                }
                            
                        </>
            }
            </div>
        );
    }
}

export default ProfileOptions;