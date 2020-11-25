import React,{Component} from "react";
import styles from '../../Styles/viewprofile.module.css'


class ExploreItem extends Component {
    render() {
        return (
            <div className={styles.gallery_item}>
                
                <img 
                src={this.props.src}
                className={styles.gallery_img} alt="gallery-pic" />
                <div className={styles.gallery_item_info}>
                    <ul>
                        <li className="gallery-item-likes">
                            <i className="fas fa-heart" aria-hidden="true"></i> 89
                        </li>
                        <li className="gallery-item-comments">
                            <i className="fas fa-comment" aria-hidden="true"></i> 5
                        </li>
                    </ul>
                </div>
        </div>
        );
    }
}

export {ExploreItem};

