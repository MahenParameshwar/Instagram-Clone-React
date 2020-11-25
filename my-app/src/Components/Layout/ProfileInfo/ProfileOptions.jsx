import React, { Component } from 'react';
import { DataContext } from '../../Context/DataContextProvider';
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

ProfileOptions.contextType = DataContext
export default ProfileOptions;