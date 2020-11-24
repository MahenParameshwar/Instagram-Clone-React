import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'

class Comment extends Component {
    render() {
        const {comment} = this.props
        return (
                <h4 className={styles.post_description}>
                                <strong>Mahen : </strong>
                                {comment}
                </h4>
        );
    }
}

export default Comment;