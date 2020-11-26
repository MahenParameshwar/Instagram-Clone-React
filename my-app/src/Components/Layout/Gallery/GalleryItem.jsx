import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../Styles/viewprofile.module.css'
class GalleryItem extends Component {
    render() {
        const {comment_count,likes,post_img,post_id} = this.props;
        console.log(comment_count)
        return (
            <NavLink to={`/viewpost/${post_id}`} className={styles.gallery_item}
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
        </NavLink>
        );
    }
}

export default GalleryItem;