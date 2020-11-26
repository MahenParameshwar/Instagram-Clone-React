import Avatar from '@material-ui/core/Avatar'
import React, { Component } from 'react';
import { getPosts,getProfile, handelFollow } from '../../Services';
import { DataContext } from '../Context/DataContextProvider';
import { GalleryItem } from '../Layout/Gallery';
import { ProfileBio, ProfileOptions, ProfileStats } from '../Layout/ProfileInfo';
import styles from '../Styles/viewprofile.module.css'
import axios from 'axios'
class ViewProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileData:null,
            posts : [],
            currUser:props.match.params
        }
        this.unFollowUser = this.unFollowUser.bind(this);
        this.followUser = this.followUser.bind(this);
    }

    async updateUser(){
        const {user} = this.props.match.params;
        const profileData = await getProfile(`http://localhost:3004/users?username=${user}`);
        
        const posts = await getPosts(`http://localhost:3004/posts?username=${user}`)
        this.setState({
            profileData:profileData[0],
            posts:posts,
            currUser:user
        })
    }

    async followUser(){
        const {profileData} = this.state;
        const {user_id} = profileData;
        const {loggedUserData,updateLoggedUserData} = this.context;
        const {following_users,id} = loggedUserData;
        following_users[user_id] = true;
        const data = await handelFollow(following_users,id);
        updateLoggedUserData(data);
        
        //update followers count of the user you have followed
        axios.get(`http://localhost:3004/users?user_id=${user_id}`).then(
            (res)=>{
                console.log(res);
                let {follower_count,id} = res.data[0];
                follower_count++;
                axios.patch(`http://localhost:3004/users/${id}`,{
                    follower_count
                }).then((res)=>this.setState({
                    profileData:res.data
                }))
            }
        ).catch(err=>console.log(err));
        
    }

    async  unFollowUser(){
        
        const {profileData} = this.state;
        const {user_id} = profileData;

        const {loggedUserData,updateLoggedUserData} = this.context;
        const {following_users,id} = loggedUserData;
        delete following_users[user_id];
        const data = await handelFollow(following_users,id);
        updateLoggedUserData(data);
        
        //update followers count of the user you have followed
        axios.get(`http://localhost:3004/users?user_id=${user_id}`).then(
            (res)=>{
                let {follower_count,id} = res.data[0];
                follower_count--;
            
                axios.patch(`http://localhost:3004/users/${id}`,{
                    follower_count
                }).then((res)=>this.setState({
                    profileData:res.data
                }))
            }
        ).catch(err=>console.log(err));
    }
    

    async componentDidMount(){

        const {user} = this.props.match.params;
        const profileData = await getProfile(`http://localhost:3004/users?username=${user}`);
        
        const posts = await getPosts(`http://localhost:3004/posts?username=${user}`)
        this.setState({
            profileData:profileData[0],
            posts:posts
        })
    }

    render() {
        const {profileData,posts,currUser} = this.state
        const {user} = this.props.match.params;
        const {loggedUserData} = this.context;
        const loggedUserName = loggedUserData.username
        const {following_users} = loggedUserData
        const {unFollowUser,followUser} = this
        //Logic to render you profile when you are in other profile and you want to view ypur profile
        if(user !== currUser){
            this.updateUser();
        }
        const {history} = this.props;
        return (
            <div className="container">
                <main className="main_container" style={{padding:"0"}}>
                    <section className={styles.profile_section}>
                        <div className={styles.profile_header}>
                            {
                            profileData ?
                            <div className={styles.profile_header_container}>
                                <div className={styles.profile_avatar_container}>
                                    <Avatar
                                    className={styles.profile_image} 
                                    href={`${profileData.username}`}
                                    src={`${profileData.avatar_img}`} 
                                    />
                                </div>
                                
                                <div className={styles.profile_header_content}>
                                    <ProfileOptions {...profileData} 
                                    history={history} 
                                    loggedUserName={loggedUserName}
                                    following_users={following_users}
                                    unFollowUser={unFollowUser}
                                    followUser={followUser}
                                    />
                                    <ProfileStats {...profileData} posts={posts.length}/>
                                    <ProfileBio {...profileData}   />
                                </div>
                                
                            </div>
                            : <div>...Loading</div>
                            } 
                        </div>

                        <div className={styles.profile_content}>
                            <div className={styles.profile_body_container}>

                                <div className={styles.gallery}>
                                    {
                                        posts.map((post)=>{
                                            return <GalleryItem key={post.post_id} {...post} />
                                        })
                                    }
                                

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

ViewProfile.contextType = DataContext;
export default ViewProfile;