import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'

class ProfileStats extends Component {
    render() {
        return (
            <div className={styles.profile_stats}>
                <ul>
                    <li>
                        <span className={styles.stat_count}>
                            785 
                        </span> posts
                    </li>
                    <li>
                        <span className={styles.stat_count}>
                            188  
                        </span> followers
                    </li>
                    <li>
                        <span className={styles.stat_count}>
                            206  
                        </span> following
                    </li>
                </ul>
        </div>
        );
    }
}

export default ProfileStats;