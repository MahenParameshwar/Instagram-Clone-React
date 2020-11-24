import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'
class ProfileOptions extends Component {
    render() {
        return (
            <div className={styles.profile_user_settings}>
                <h1>
                    Rock
                </h1>
            <button class="btn profile-message-btn">Message</button>
            </div>
        );
    }
}

export default ProfileOptions;