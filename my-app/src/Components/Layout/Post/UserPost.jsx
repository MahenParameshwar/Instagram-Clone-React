import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'
import Avatar from '@material-ui/core/Avatar'
import Comment from './Comment';
import AddComment from './AddComment';
import { NavLink } from 'react-router-dom';
import axios from "axios"
import { DataContext } from '../../Context/DataContextProvider';
import { List } from './List';



class UserPost extends Component {
    constructor(props){
        super(props)
        this.state={
            users:[]
      }
    }

    
 componentDidMount(){
    axios
    .get(`http://localhost:3004/users`)
    .then((res) => {
      this.setState({
        users: [...res.data],
        isLoading: false,
        error: false,
      });
    })
    .catch((err) => {
      this.setState({
        error: true,
        isLoading: false,
      });
    });
   
  }

    
    render() {
        const {item} = this.props
        const {users} = this.state  
        const userData = users?.find(user=>user.user_id===item.user_id)
        const {username,avatar_img,user_id} = {...userData}
        console.log(username)
        //const username = "Rock";
        return (
            <div className={styles.post}>
                <div className={styles.post_header}>
                    <Avatar
                    className={styles.post_avatar}
                    alt="Rock"
                    src={avatar_img}
                    />
                    
                    <NavLink
                    id={user_id}
                    className={styles.user_profile_link}
                    to = {`/viewprofile/${user_id}`}>
                        <h4>{username}</h4>
                    </NavLink>

                    <List/>
               
                    
                </div>
                <img className={styles.post_img} src={item.post_img} alt=""/>
                <div className={styles.post_content}>
                    <div className={styles.post_options}>
                        <button className={styles.post_btn}>
                            <img className={styles.post_op_img} src="/Images/heart.svg" alt=""/>
                        </button>
                        <button className={styles.post_btn}>
                            <img className={styles.post_op_img} src="/Images/chat-bubble.svg" alt=""/>
                        </button>
                        <button className={styles.post_btn}>
                            <img className={styles.post_op_img} src="/Images/send.svg" alt=""/>
                        </button>
                    </div>
                    <div className={styles.likes_count}>
                        {item.likes} likes
                    </div>
                    <div className={styles.view_comments}>
                        View all 773 comments
                    </div>
                    {/*Post User and discription */}
                    <div>
                        <h4 className={styles.post_description}>
                            <strong>{username} : </strong>
                            {item.post_description}
                        </h4>
                    </div>
                    
                    {/*Post Comments */}
                    <div>
                        <Comment />
                        <Comment />
                    </div>

                    <AddComment />
                </div>
            </div>
        );
    }
}

UserPost.contextType = DataContext
export default UserPost;