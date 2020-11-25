import React, { Component } from 'react';
import styles from '../../Styles/viewprofile.module.css'
class GalleryItem extends Component {
    render() {
        const {comment_count,likes,post_img} = this.props;
        return (
            <div className={styles.gallery_item}
            style={{
                backgroundImage:`url(${post_img})`,
                backgroundSize:"cover"
            }}
            >
                
                <div className={styles.gallery_item_info}>
                    <ul>
                        <li className="gallery-item-likes">
                            <i className="fas fa-heart" aria-hidden="true"></i> {likes}
                        </li>
                        <li className="gallery-item-comments">
                            <i className="fas fa-comment" aria-hidden="true"></i> {comment_count}
                        </li>
                    </ul>
                </div>
        </div>
        );
    }
}

export default GalleryItem;