import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'

class Comment extends Component {
    
    render() {
        const {comment,username} = this.props
        return (
                <h4 className={styles.post_description}>
                                <strong>{`${username}`} : </strong>
                                {`${comment}`}
                </h4>
        );
    }
}

export default Comment;