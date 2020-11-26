import React,{Component} from "react";
import styles from '../../Styles/viewprofile.module.css'


class ExploreItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div className={styles.gallery_item}>
                
                <img 
                src={this.props.post_img}
                className={styles.gallery_img} alt="gallery-pic" />
                <div className={styles.gallery_item_info}>
                    <ul>
                        <li className="gallery-item-likes">
                            <i className="fas fa-heart" aria-hidden="true"></i> {this.props.likes}
                        </li>
                        <li className="gallery-item-comments">
                            <i className="fas fa-comment" aria-hidden="true"></i> {this.props.comment_count}
                        </li>
                    </ul>
                </div>
        </div>
        );
    }
}

export {ExploreItem};

