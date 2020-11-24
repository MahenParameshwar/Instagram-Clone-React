import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'
import Comment from './Comment';

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled:false,
            postComment:""
        }
    }
    handleChange=(e)=>{
        const {name,value} = e.target
        this.setState({
            [name]:value
        })

    }

    handleComment = ()=>{
        const {postComment,disabled} = this.state
        this.setState({
            postComment:postComment
        })
        console.log(postComment)
    }
    
    render() {
        const {postComment} = this.state
        return (
            <div className={styles.add_comment_container}>
                <input type="text" name="postComment" value={postComment} placeholder="Add a comment" onChange={this.handleChange}/>
                <button
                onClick = {this.handleComment}
                className={styles.add_comment_btn}
                >Post
                </button>
                <Comment comment={postComment}/>
            </div>
        );
    }
}

export default AddComment;