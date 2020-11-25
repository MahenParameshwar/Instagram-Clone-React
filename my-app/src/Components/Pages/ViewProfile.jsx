import Avatar from '@material-ui/core/Avatar'
import React, { Component } from 'react';
import { getPosts,getProfile } from '../../Services';
import { GalleryItem } from '../Layout/Gallery';
import { ProfileBio, ProfileOptions, ProfileStats } from '../Layout/ProfileInfo';
import styles from '../Styles/viewprofile.module.css'

class ViewProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profileData:null,
            posts : [],
            currUser:props.match.params
        }
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
        if(user !== currUser){
            this.updateUser();
        }
        const {history} = this.props;
        return (
            <div className="container">
                <main className="main_container">
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
                                    <ProfileOptions {...profileData} history={history}/>
                                    <ProfileStats {...profileData} posts={posts.length}/>
                                    <ProfileBio {...profileData}  />
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

export default ViewProfile;