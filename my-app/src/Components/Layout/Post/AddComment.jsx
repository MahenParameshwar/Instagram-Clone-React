import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled:false
        }
    }

    hadelPostComment = ()=>{
        console.log("trigered");
    }
    
    render() {
        return (
            <div className={styles.add_comment_container}>
                <input type="text" placeholder="Add a comment"/>
                <button
                onClick = {this.hadelPostComment}
                className={styles.add_comment_btn}
                >Post
                </button>
            </div>
        );
    }
}

export default AddComment;