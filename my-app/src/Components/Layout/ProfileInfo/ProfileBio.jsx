import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'

class ProfileBio extends Component {
    
    render() {
        const {profile_description,fullName} = this.props;
        return (
            <div className={styles.profile_bio}>
                <h4 className={styles.profile_real_name}>
                    {fullName}
                </h4>
                <p>
                    {profile_description}
                </p>                            
            </div>
        );
    }
}

export default ProfileBio;