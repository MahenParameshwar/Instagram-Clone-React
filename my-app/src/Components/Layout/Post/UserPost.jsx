import React, { Component } from 'react';
import styles from '../../Styles/post.module.css'
import Avatar from '@material-ui/core/Avatar'
import Comment from './Comment';
import AddComment from './AddComment';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';

import { Modal, Button } from 'antd';

class UserPost extends Component {
    state = {
        modal2Visible: false,
      };
    
      
    
      setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
    render() {
        const username = "Rock";
        return (
            <div className={styles.post}>
                <div className={styles.post_header_container}>
                    <div className={styles.post_header}>
                        <Avatar
                        className={styles.post_avatar}
                        alt="Rock"
                        src="/Images/avatar.png"
                        />
                        {/*Post Username */}
                        <NavLink
                        className={styles.user_profile_link}
                        to = {`/viewprofile/${username}`}>
                            <h4>Username</h4>
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
                    <button>Follow</button>
                    <button>Go to Post</button>
                    <button>Share to...</button>
                    <button>Copy Link</button>
                    <button>Embed</button>
                    <button>Cancel</button>
                    </Modal>
      </>
                </div>
                
                <img className={styles.post_img} src="https://i.ytimg.com/vi/D0STjbmtMjY/maxresdefault.jpg" alt=""/>
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
                        140,740 likes
                    </div>
                    <div className={styles.view_comments}>
                        View all 773 comments
                    </div>
                    {/*Post User and discription */}
                    <div>
                        <h4 className={styles.post_description}>
                            <strong>The Rock : </strong>
                            Just Bring it
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

export default UserPost;