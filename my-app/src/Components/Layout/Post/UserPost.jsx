import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'
import Avatar from '@material-ui/core/Avatar'
import Comment from './Comment';
import AddComment from './AddComment';

class UserPost extends Component {
    render() {
        return (
            <div className={styles.post}>
                <div className={styles.post_header}>
                    <Avatar
                    className={styles.post_avatar}
                    alt="Rock"
                    src="/Images/avatar"
                    />
                    {/*Post Username */}
                    <h4>Username</h4>
                </div>
                <img className={styles.post_img} src="https://i.ytimg.com/vi/D0STjbmtMjY/maxresdefault.jpg" alt=""/>
                <div className={styles.post_content}>
                    <div className={styles.post_options}>
                        <button className={styles.post_btn}>
                            <img className={styles.post_op_img} src="/Images/heart.svg" alt=""/>
                        </button>
                        <button className={styles.post_btn}>
                            <img className={styles.post_op_img} src="/Images/chat-bubble.svg" alt=""/>
                        </button>
                        <button className={styles.post_btn}>
                            <img className={styles.post_op_img} src="/Images/send.svg" alt=""/>
                        </button>
                    </div>
                    <div className={styles.likes_count}>
                        140,740 likes
                    </div>
                    <div className={styles.view_comments}>
                        View all 773 comments
                    </div>
                    {/*Post User and discription */}
                    <div>
                        <h4 className={styles.post_description}>
                            <strong>The Rock : </strong>
                            Just Bring it
                        </h4>
                    </div>
                    
                    {/*Post Comments */}
                    <div>
                        <Comment />
                        <Comment />
                    </div>

                    <AddComment />
                </div>
            </div>
        );
    }
}

export default UserPost;