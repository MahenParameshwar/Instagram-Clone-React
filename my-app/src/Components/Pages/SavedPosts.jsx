import axios from 'axios';
import React, { Component } from 'react';
import { DataContext } from '../Context/DataContextProvider';
import Footer from '../Layout/Footer/Footer';
import { GalleryItem } from '../Layout/Gallery';
import { UserPost } from '../Layout/Post';
import styles from '../Styles/viewprofile.module.css'

class SavedPosts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts:null
        }
    }
    
    componentDidMount(){
        const {loggedUserData} = this.context;
        const posts_arr = Object.keys(loggedUserData.saved_posts);
        console.log(posts_arr);
    //Posts Array Requests Url
    const urlArr = posts_arr
                    .map((id)=>`https://instagram-mock-server.herokuapp.com/posts?post_id=${id}`)
    
    const requests = urlArr.map((url) => fetch(url).then((res)=>res.json()).then(res=>res[0]));
    
    axios.all(requests)
    .then((res)=>{
        console.log(res)
        this.setState({
            posts:res
        })
    })
    }
    render() {
        const {posts} = this.state
        return (
            <>
                <div className="container">
                 <main className="main_container">
                
                     <div className={styles.save_post_container} style={{marginTop:"30px"}}>
                        <h2>Saved Posts</h2>
                        <div className={styles.gallery} >
                            {
                                posts?.map(post=>{
                                    return <GalleryItem key={post.post_id} {...post} />
                                })
                            }
                        </div>
                     </div>
                </main>
            </div>
            <Footer />
            </>
            
        );
    }
}

SavedPosts.contextType = DataContext

export default SavedPosts;