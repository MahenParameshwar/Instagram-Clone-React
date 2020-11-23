import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'

class Comment extends Component {
    render() {
        return (
                <h4 className={styles.post_description}>
                                <strong>Mahen : </strong>
                                Test Comment
                </h4>
        );
    }
}

export default Comment;