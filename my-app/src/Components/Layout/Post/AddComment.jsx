import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled:false,
            comment:""
        }
    }

    handelChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
            [name] : value
        })
    }


    handelSubmit = (e)=>{
        e.preventDefault();
        const {comment} = this.state;
        const {postComment} = this.props;
        postComment(comment);
        this.setState({
            comment:""
        })
    }
    
    render() {
        const {comment} = this.state
        return (
            <div>
                <form onSubmit={this.handelSubmit} className={styles.add_comment_container}>
                    <input type="text"
                    placeholder="Add a comment"
                    onChange={this.handelChange}
                    name='comment'
                    value = {comment}
                    />
                    <button type="submit"
                    className={styles.add_comment_btn}>
                        Post
                    </button>
                </form>
                
            </div>
        );
    }
}

export default AddComment;