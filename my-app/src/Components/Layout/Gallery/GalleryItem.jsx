import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'
class GalleryItem extends Component {
    render() {
        return (
            <div className={styles.gallery_item}>
                <img 
                src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
                className={styles.gallery_img} alt="gallery-pic" />
                <div className={styles.gallery_item_info}>
                    <ul>
                        <li class="gallery-item-likes">
                            <i class="fas fa-heart" aria-hidden="true"></i> 89
                        </li>
                        <li class="gallery-item-comments">
                            <i class="fas fa-comment" aria-hidden="true"></i> 5
                        </li>
                    </ul>
                </div>
        </div>
        );
    }
}

export default GalleryItem;