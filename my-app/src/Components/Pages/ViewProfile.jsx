import Avatar from '@material-ui/core/Avatar'
import React, { Component } from 'react';
import { matchPath } from 'react-router-dom';
import { DataContext } from '../Context/DataContextProvider';
import { GalleryItem } from '../Layout/Gallery';
import { ProfileBio, ProfileOptions, ProfileStats } from '../Layout/ProfileInfo';
import styles from '../Styles/viewprofile.module.css'

class ViewProfile extends Component {
  constructor(props){
    super(props)

  }
  
    render() {
      const {user}=this.props.match.params
        return (
            <div className="container">
                <main className="main_container">
                    <section className={styles.profile_section}>
                        <div className={styles.profile_header}>
                            
                            <div className={styles.profile_header_container}>
                                <div className={styles.profile_avatar_container}>
                                    <Avatar
                                    className={styles.profile_image} 
                                    href="JohnCena"
                                    src="https://hollywoodneuz.net/wp-content/uploads/2013/07/The-Rock-wwe-champion-hd-wallpapers.jpg-e1374313433660.jpeg" 
                                    />
                                </div>
                                
                                <div className={styles.profile_header_content}>
                                    <ProfileOptions userId={user} />
                                    <ProfileStats userId={user} />
                                    <ProfileBio userId={user} />
                                </div>
                                
                            </div>

                        </div>

                        <div className={styles.profile_content}>
                            <div className={styles.profile_body_container}>
                                <div className={styles.gallery}>

                                    <GalleryItem />
                                    <GalleryItem />
                                    <GalleryItem />

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

ViewProfile.contextType = DataContext
export default ViewProfile;
