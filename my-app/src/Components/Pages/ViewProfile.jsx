import Avatar from '@material-ui/core/Avatar'
import React, { Component } from 'react';
import styles from '../Styles/viewprofile.module.css'

class ViewProfile extends Component {
    render() {
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
                                    <div className={styles.profile_user_settings}>
                                        <h1>
                                            Rock
                                        </h1>
                                        <button class="btn profile-message-btn">Message</button>
                                    </div>
                                    
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
                                    
                                    <div className={styles.profile_bio}>
                                        <h4 className={styles.profile_real_name}>
                                            Rock
                                        </h4>
                                        <p>
                                        Welcome to my Instagram. These images will be posted without explanation, for your interpretation. Enjoy.
                                        </p>
                                    </div>

                                </div>
                                
                            </div>

                        </div>

                        <div className={styles.profile_content}>
                            <div className={styles.profile_body_container}>
                                <div className={styles.gallery}>

                                    <div className={styles.gallery_item}>
                                        <img 
                                        src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                                        className={styles.gallery_img} alt="gallery-pic" />
                                        <div className={styles.gallery_item_info}>
                                            <ul>
                                                <li class="gallery-item-likes">
                                                    <span class="visually-hidden">
                                                        Likes:
                                                    </span>
                                                    <i class="fas fa-heart" aria-hidden="true"></i> 
                                                    89
                                                </li>
                                                <li class="gallery-item-comments">
                                                    <span class="visually-hidden">
                                                        Comments:
                                                    </span>
                                                    <i class="fas fa-comment" aria-hidden="true"></i> 
                                                    5
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={styles.gallery_item}>
                                        <img 
                                        src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                                        className={styles.gallery_img} alt="gallery-pic" />
                                        <div className={styles.gallery_item_info}>
                                            <ul>
                                                <li class="gallery-item-likes">
                                                    <span class="visually-hidden">
                                                        Likes:
                                                    </span>
                                                    <i class="fas fa-heart" aria-hidden="true"></i> 
                                                    89
                                                </li>
                                                <li class="gallery-item-comments">
                                                    <span class="visually-hidden">
                                                        Comments:
                                                    </span>
                                                    <i class="fas fa-comment" aria-hidden="true"></i> 
                                                    5
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className={styles.gallery_item}>
                                        <img 
                                        src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                                        className={styles.gallery_img} alt="gallery-pic" />
                                        <div className={styles.gallery_item_info}>
                                            <ul>
                                                <li class="gallery-item-likes">
                                                    <span class="visually-hidden">
                                                        Likes:
                                                    </span>
                                                    <i class="fas fa-heart" aria-hidden="true"></i> 
                                                    89
                                                </li>
                                                <li class="gallery-item-comments">
                                                    <span class="visually-hidden">
                                                        Comments:
                                                    </span>
                                                    <i class="fas fa-comment" aria-hidden="true"></i> 
                                                    5
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

export default ViewProfile;