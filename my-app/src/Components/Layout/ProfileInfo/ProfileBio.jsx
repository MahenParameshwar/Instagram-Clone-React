import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'

class ProfileBio extends Component {
    render() {
        return (
            <div className={styles.profile_bio}>
                <h4 className={styles.profile_real_name}>
                    Rock
                </h4>
                <p>
                    Welcome to my Instagram. These images will be posted without explanation, for your interpretation. Enjoy.
                </p>                            
            </div>
        );
    }
}

export default ProfileBio;