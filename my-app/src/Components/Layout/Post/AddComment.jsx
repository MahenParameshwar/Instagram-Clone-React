import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'

class AddComment extends Component {
    render() {
        return (
            <div className={styles.add_comment_container}>
                <input type="text" placeholder="Add a comment"/>
                <button className={styles.add_comment_btn}>Post</button>
            </div>
        );
    }
}

export default AddComment;