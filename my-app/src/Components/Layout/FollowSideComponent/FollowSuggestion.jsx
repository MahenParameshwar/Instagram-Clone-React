import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import styles from '../../Styles/suggestion.module.css'

class FollowSuggestion extends Component {
    render() {
        return (
            <div className={styles.follow_container}>
                <div className={styles.top}>
                    <Avatar
                    className={styles.avatar_url}
                    alt="Mahen"
                    src="images"
                    />
                    <div>
                        <div className={styles.username}>mahenparameshwar</div>
                        <div className={`${styles.fullname} ${styles.grey}`}>Mahen Parameshwar</div>
                    </div>
                    <button className={`${styles.btn} ${styles.blue}`}>Switch</button>
                </div>
                <div className={styles.middle}>
                    <div className={styles.suggested}>Suggested For You</div>
                    <button className={`${styles.btn} black`}>See All</button>
                </div>
                <div className={styles.bottom}>
                    <div>
                        <Avatar
                        className={styles.suggestion_avatar_url}
                        alt="Aahen"
                        src="images"
                        />
                        <div>
                            <div className={styles.username}>
                                alb511
                            </div>
                            <div className={`${styles.follows} ${styles.grey}`}>
                                Follows You
                            </div>
                        </div>
                        <button className={`${styles.btn} ${styles.blue}`}>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default FollowSuggestion;