import React, { Component } from 'react';
import UserSingelPost from '../Layout/Post/UserSingelPost';

class SingelPost extends Component {
    render() {
        const {post} = this.props.match.params;
        console.log(post)
        return (
            <div className="container">
                <UserSingelPost post_id={post} />
            </div>
        );
    }
}

export default SingelPost;