import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'

class ProfileStats extends Component {
    render() {
        const {follower_count,following_users,posts} = this.props; 
        console.log(Number(follower_count));
        return (
            <div className={styles.profile_stats}>
                <ul>
                    <li>
                        <span className={styles.stat_count}>
                            {posts}
                        </span> posts
                    </li>
                    <li>
                        <span className={styles.stat_count}>
                            {Number(follower_count)}  
                        </span> followers
                    </li>
                    <li>
                        <span className={styles.stat_count}>
                            {Object.keys(following_users).length} 
                        </span> following
                    </li>
                    
                </ul>
        </div>
        );
    }
}

export default ProfileStats;