import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'
import Avatar from '@material-ui/core/Avatar'
import Comment from './Comment';
import AddComment from './AddComment';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Modal, Button } from 'antd';
import { DataContext } from '../../Context/DataContextProvider';
import {v4 as uuid} from 'uuid' 
import { handelBookmark, handelFollow, handelLike } from '../../../Services';

class UserPost extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            modal2Visible: false,
            comment_count:props.comment_count,
            likes_count:props.likes,
            saved_posts:props.saved_posts,
            comments:[],
        }

        this.unFollowUser = this.unFollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
        this.postComment = this.postComment.bind(this);
        this.likePost = this.likePost.bind(this);
        this.unLikePost = this.unLikePost.bind(this);
        this.unBookmark = this.unBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
    }

    async unBookmark(){
        const {post_id} = this.props
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {saved_posts,id} = loggedUserData;
        delete saved_posts[post_id];

        const data = await handelBookmark(saved_posts,id);
        updateLoggedUserData(data);
    }

    async bookmark(){
        const {post_id} = this.props
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {saved_posts,id} = loggedUserData;
        saved_posts[post_id] = true;

        const data = await handelBookmark(saved_posts,id);
        updateLoggedUserData(data);
    }

    async likePost(){
        const {post_id} = this.props
        const postIdPatch = this.props.id;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {liked_posts,id} = loggedUserData;
        liked_posts[post_id] = true;
        const data = await handelLike(liked_posts,id);
        updateLoggedUserData(data);
        
        const {likes_count} = this.state
        const newLikecount = likes_count + 1;
        axios.patch(`https://instagram-mock-server.herokuapp.com/posts/${postIdPatch}`,{
            likes : newLikecount
        }).then((res)=>{
            this.setState({
                likes_count:newLikecount,
            })
        })

    }

    async unLikePost (){
        const {post_id} = this.props
        const postIdPatch = this.props.id;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {liked_posts,id} = loggedUserData;
        delete liked_posts[post_id];
        const data = await handelLike(liked_posts,id);
        updateLoggedUserData(data);
        
        const {likes_count} = this.state
        const newLikecount = likes_count - 1;
        axios.patch(`https://instagram-mock-server.herokuapp.com/posts/${postIdPatch}`,{
            likes : newLikecount
        }).then((res)=>{
            this.setState({
                likes_count:newLikecount,
            })
        })
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    async followUser(){
        
        const {user_id} = this.props;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {following_users,id} = loggedUserData;
        following_users[user_id] = true;
        const data = await handelFollow(following_users,id);
        updateLoggedUserData(data);
        
        //update followers count of the user you have followed
        axios.get(`https://instagram-mock-server.herokuapp.com/users?user_id=${user_id}`).then(
            (res)=>{
                let {follower_count,id} = res.data[0];
                follower_count++;
                axios.patch(`https://instagram-mock-server.herokuapp.com/users/${id}`,{
                    follower_count
                })
            }
        ).catch(err=>console.log(err));
        
    }

    async  unFollowUser(){
        const {user_id} = this.props;
        
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {following_users,id} = loggedUserData;
        delete following_users[user_id];
        const data = await handelFollow(following_users,id);
        updateLoggedUserData(data);
        
        //update followers count of the user you have followed
        axios.get(`https://instagram-mock-server.herokuapp.com/users?user_id=${user_id}`).then(
            (res)=>{
                let {follower_count,id} = res.data[0];
                follower_count--;
                axios.patch(`https://instagram-mock-server.herokuapp.com/users/${id}`,{
                    follower_count
                })
            }
        ).catch(err=>console.log(err));
    }

    updateCommentCount(id,commentToAdd){
        const {comment_count,comments} = this.state
        const newCount = comment_count+1;
        axios.patch(`https://instagram-mock-server.herokuapp.com/posts/${id}`,{
            comment_count : newCount
        }).then((res)=>{
            this.setState({
                comment_count:newCount,
                comments : [...comments,commentToAdd]
            })
        })
    }

    postComment(comment){
        
        const {loggedUserData} = this.context;
        const {username,user_id,liked_posts} = loggedUserData;
        //posts props
        const {post_id,id} = this.props;
        console.log(comment,username,user_id,post_id)

        axios.post(`https://instagram-mock-server.herokuapp.com/comments`,
                    {
                        user_id,
                        username,
                        post_id,
                        comment,
                        comment_id:uuid()
                    })
                    .then((res)=>{
                        this.updateCommentCount(id,res.data)
                    }).catch((err)=>console.log(err.message));
    }

    //on mounting fetch all the comments of the post
    componentDidMount(){
        const {post_id} = this.props;
        axios.get(`https://instagram-mock-server.herokuapp.com/comments?post_id=${post_id}`)
        .then(
            res => this.setState({
                comments:res.data
            }))
    }


    render() {
        
        const {post_description,post_img,username,user_id,post_id,avatar_img} = this.props;
        const {loggedUserData} = this.context;
        const {following_users,liked_posts,saved_posts} = loggedUserData;
        
        const {comments,comment_count,likes_count} = this.state;
        return (
            <div className={styles.post}>
                <div className={styles.post_header_container}>
                    <div className={styles.post_header}>
                        
                        <Avatar
                        className={styles.post_avatar}
                        alt={username}
                        src={avatar_img}
                        />

                        {/*Post Username */}
                        <NavLink
                        className={styles.user_profile_link}
                        to = {`/viewprofile/${username}`}>
                            <h4>{`${username}`}</h4>
                        </NavLink>

                    </div>
                    <>
                        <Button  onClick={() => this.setModal2Visible(true)}>
                            <img src="/Images/more.png" alt=""/>
                        </Button>
                        <Modal className="more_options"
                        centered
                        footer={null}
                        visible={this.state.modal2Visible}
                        onOk={() => this.setModal2Visible(false)}
                        onCancel={() => this.setModal2Visible(false)}
                        >
                            <button>Report</button>
                            {
                                following_users[user_id] ? <button style={{color:"red"}} onClick={this.unFollowUser}>UnFollow</button> : <button onClick={this.followUser}>Follow</button>
                            }
                            <button>Go to Post</button>
                            <button>Share to...</button>
                            <button>Copy Link</button>
                            <button>Embed</button>
                            <button>Cancel</button>
                        </Modal>
                </>
                </div>
                
                <img className={styles.post_img} src={`${post_img}`} alt=""/>
                <div className={styles.post_content}>
                    <div className={styles.post_option_container}>
                        <div className={styles.post_options}>
                            {
                                liked_posts[post_id] ? 
                                <button onClick={this.unLikePost} 
                                    className={styles.post_btn}>
                                    <img className={styles.post_op_img} src="/Images/like.svg" alt=""/>
                                </button> :
                                <button onClick={this.likePost} 
                                className={styles.post_btn}>
                                    <img className={styles.post_op_img} src="/Images/unlike.svg" alt=""/>
                                </button>
                            }
                            <button className={styles.post_btn}>
                                <img className={styles.post_op_img} src="/Images/chat-bubble.svg" alt=""/>
                            </button>
                            <button className={styles.post_btn}>
                                <img className={styles.post_op_img} src="/Images/send.svg" alt=""/>
                            </button>
                        </div>
                        <div>
                            {
                                saved_posts[post_id] ? 
                                    <button className={styles.post_btn} onClick={this.unBookmark}>
                                        <img className={styles.post_op_img} src="/Images/bookmark.svg" alt=""/>
                                    </button> :
                                    <button className={styles.post_btn} onClick={this.bookmark}>
                                        <img className={styles.post_op_img} src="/Images/unbookmark.svg" alt=""/>
                                    </button>
                            }
                        </div>
                    </div>
                    
                    <div className={styles.likes_count}>
                        {`${likes_count}`} likes
                    </div>
                    <div className={styles.view_comments}>
                        View all {`${comment_count}`} comments
                    </div>
                    {/*Post User and discription */}
                    <div>
                        {post_description ? 
                            <h4 className={styles.post_description}>
                            <strong>{`${username}`} : </strong>
                            {`${post_description}`}
                            </h4> : <></>
                    
                        }
                        
                    </div>
                    
                    {/*Post Comments */}
                    <div>
                        {
                            comments.map((comment)=>{
                                return <Comment key={comment.id} {...comment} />
                            })
                        }
                    </div>

                    <AddComment postComment={this.postComment} />
                </div>
            </div>
        );
    }
}
UserPost.contextType = DataContext 
export default UserPost;