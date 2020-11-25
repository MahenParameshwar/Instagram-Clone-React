import React, { Component } from 'react';
import { DataContext } from '../Context/DataContextProvider';
import { UserPost } from '../Layout/Post';
import styles from '../Styles/Home.module.css'
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts:[],
        }
    }
    

    //On mounting fetch all the posts of the users you are following
    componentDidMount(){
    const {loggedUserData} = this.context;
    const following_users_arr = loggedUserData.following_users;
    
    //Posts Array Requests Url
    const urlArr = following_users_arr
                    .map((id)=>`http://localhost:3004/posts?user_id=${id}`)
    
    const requests = urlArr.map((url) => fetch(url).then((res)=>res.json()));
    
    axios.all(requests)
    .then((res)=>{
        this.setState({
            posts:res
        })
    })

    }

    render() {
        
        const {posts} = this.state;
        
        return (
            <div className="container">
                <main className="main_container">
                    <section className="home_section">
                        <div className={styles.home_left_section}>
                            <div className={styles.presentation}>

                            </div>
                            <div className={styles.posts_container}>
                                {
                                    posts.map((items)=>items.map(item=><UserPost {...item} key={item.post_id} />))
                                }
                            </div>
                        </div>
                        <div className={styles.home_right_section}>

                        </div>
                    </section>
                </main>
            </div>
        );
    }
}

Home.contextType = DataContext

export default Home;