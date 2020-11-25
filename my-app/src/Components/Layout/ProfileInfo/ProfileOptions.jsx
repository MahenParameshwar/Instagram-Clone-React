import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'
class ProfileOptions extends Component {
    
    render() {
        const {username} = this.props
        return (
            <div className={styles.profile_user_settings}>
                <h1>
                    {username}
                </h1>
            <button className={styles.profile_btn}>Message</button>
            </div>
        );
    }
}

export default ProfileOptions;