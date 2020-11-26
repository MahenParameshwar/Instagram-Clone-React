import React, { Component } from 'react';
import styles from '../../Styles/singelpost.module.css'
import Avatar from '@material-ui/core/Avatar'
import Comment from './Comment';
import AddComment from './AddComment';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Modal, Button, Spin } from 'antd';
import { DataContext } from '../../Context/DataContextProvider';
import {v4 as uuid} from 'uuid' 
import { handelBookmark, handelFollow, handelLike } from '../../../Services';
import stylespost from '../../Styles/post.module.css'

class UserSingelPost extends Component {
    
    constructor(props) {
        
        super(props);
        
        this.state = {
            post:null,
            comments:[],
            modal2Visible: false,
            comment_count:0,
            likes_count:0
        }

        this.postComment = this.postComment.bind(this);
        this.likePost = this.likePost.bind(this);
        this.unLikePost = this.unLikePost.bind(this);
        this.unBookmark = this.unBookmark.bind(this);
        this.bookmark = this.bookmark.bind(this);
    }

    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
    }

    updateComment(id,commentToAdd){
        const {comment_count,comments} = this.state
        const newCount = comment_count+1;
        axios.patch(`http://localhost:3004/posts/${id}`,{
            comment_count : newCount
        }).then((res)=>{
            this.setState({
                comments : [...comments,commentToAdd]
            })
        })
    }

    postComment(comment){
        
        const {loggedUserData} = this.context;
        const {username,user_id,liked_posts} = loggedUserData;
        //posts props
        const {post_id,id} = this.state.post;
        
        console.log(comment,username,user_id,post_id)

        axios.post(`http://localhost:3004/comments`,
                    {
                        user_id,
                        username,
                        post_id,
                        comment,
                        comment_id:uuid()
                    })
                    .then((res)=>{
                        this.updateComment(id,res.data)
                    }).catch((err)=>console.log(err.message));
    }

    async likePost(){
        const {post} = this.state
        const {post_id} = post;
        const postIdPatch = post.id;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {liked_posts,id} = loggedUserData;
        liked_posts[post_id] = true;
        const data = await handelLike(liked_posts,id);
        updateLoggedUserData(data);
        
        const {likes_count} = this.state
        const newLikecount = likes_count + 1;
        axios.patch(`http://localhost:3004/posts/${postIdPatch}`,{
            likes : newLikecount
        }).then((res)=>{
            this.setState({
                likes_count:newLikecount,
            })
        })

    }

    async unLikePost (){
        const {post} = this.state
        const {post_id} = post;
        const postIdPatch = post.id;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {liked_posts,id} = loggedUserData;
        delete liked_posts[post_id];
        const data = await handelLike(liked_posts,id);
        updateLoggedUserData(data);
        
        const {likes_count} = this.state
        const newLikecount = likes_count - 1;
        axios.patch(`http://localhost:3004/posts/${postIdPatch}`,{
            likes : newLikecount
        }).then((res)=>{
            this.setState({
                likes_count:newLikecount,
            })
        })
    }

    async unBookmark(){
        const {post} = this.state;
        const {post_id} = post;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {saved_posts,id} = loggedUserData;
        delete saved_posts[post_id];

        const data = await handelBookmark(saved_posts,id);
        updateLoggedUserData(data);
    }

    async bookmark(){
        const {post} = this.state
        const {post_id} = post;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {saved_posts,id} = loggedUserData;
        saved_posts[post_id] = true;

        const data = await handelBookmark(saved_posts,id);
        updateLoggedUserData(data);
    }


    componentDidMount(){
        const {post_id} = this.props;
        axios.get(`http://localhost:3004/posts?post_id=${post_id}`)
        .then(res=>
            this.setState({
                post:res.data[0],
                likes_count:res.data[0].likes,
                avatar_img:res.data[0].avatar_img,
                user_id:res.data[0].user_id,
                username:res.data[0].username
            })
        )
        axios.get(`http://localhost:3004/comments?post_id=${post_id}`)
        .then(
            res => this.setState({
                comments:res.data
                
            }))

}


    render() {
        const {post,comments,likes_count,avatar_img,username,user_id} = this.state;
        console.log(avatar_img)
        const {loggedUserData} = this.context;
        const {liked_posts,saved_posts} = loggedUserData
        return (
            
            post ? <div className="container">
                <main className="main_container" style={{padding:0}}>
                <div className={styles.sp_container}>
                            <div className={styles.sp_img_container}>
                                <img src={post.post_img} alt="" />
                            </div>
                            <div className={styles.sp_post_container}>
                                <div className={styles.sp_post_top}>
                                    <div className={styles.sp_avatar_container}>
                                        <Avatar className={styles.sp_avatar} src={avatar_img} alt={username}/>
                                        <NavLink to={`/viewprofile/${username}`}>
                                            <div className={styles.sp_username}>
                                                {post.username}
                                            </div>
                                        </NavLink>
                                        
                                    </div>
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
                                        <button>Share to...</button>
                                        <button>Copy Link</button>
                                        <button>Embed</button>
                                        <button>Cancel</button>
                                    </Modal>
                                </div>
                                <div className={styles.sp_comments}>
                                    {
                                        comments?.map(comment=>{
                                            return <Comment key={comment.id} {...comment} />
                                        })
                                    }
                                </div>
                                <div className={styles.sp_btn_container}>
                                <div className={styles.post_option_container} style={{display:"flex",justifyContent:"space-between"}}>
                                    <div className={stylespost.post_options}>
                                        {
                                            liked_posts[post.post_id] ? 
                                            <button onClick={this.unLikePost} 
                                                className={stylespost.post_btn}>
                                                <img className={stylespost.post_op_img} src="/Images/like.svg" alt=""/>
                                            </button> :
                                            <button onClick={this.likePost} 
                                            className={stylespost.post_btn}>
                                                <img className={stylespost.post_op_img} src="/Images/unlike.svg" alt=""/>
                                            </button>
                                        }
                                        <button className={stylespost.post_btn}>
                                            <img className={stylespost.post_op_img} src="/Images/chat-bubble.svg" alt=""/>
                                        </button>
                                        <button className={stylespost.post_btn}>
                                            <img className={stylespost.post_op_img} src="/Images/send.svg" alt=""/>
                                        </button>
                                        </div>
                                    <div>
                                {
                                    saved_posts[post.post_id] ? 
                                        <button className={stylespost.post_btn} onClick={this.unBookmark}>
                                            <img className={stylespost.post_op_img} src="/Images/bookmark.svg" alt=""/>
                                        </button> :
                                        <button className={stylespost.post_btn} onClick={this.bookmark}>
                                            <img className={stylespost.post_op_img} src="/Images/unbookmark.svg" alt=""/>
                                        </button>
                                }
                                </div>
                                </div>
                                </div>
                                <div>
                                    <span>
                                        {likes_count}
                                    </span> likes
                                </div>
                                <AddComment postComment={this.postComment} />
                            </div>
                        </div>
                </main>
                        
                    </div> : 
                    <div>
                        <Spin/>
                    </div>
            
            
        );
    }
}
UserSingelPost.contextType = DataContext 
export default UserSingelPost;