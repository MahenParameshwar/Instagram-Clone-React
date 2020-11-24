import React, { Component } from 'react';
import { DataContext } from '../Context/DataContextProvider';
import { UserPost } from '../Layout/Post';
import styles from '../Styles/Home.module.css'
// import { Routes } from '../Routes';


class Home extends Component {
    render() {
        const {getPosts,getUsers} = this.context
        console.log(getPosts(),getUsers())
        return (
            <div className="container">
                <main className="main_container">
                    <section className="home_section">
                        <div className={styles.home_left_section}>
                            <div className={styles.presentation}>
                                {
                                    getUsers()?.map((user)=>{
                                        return(
                                        <div styles={{margin:"20px"}}><img width="70px"  src={user.avatar_img} /></div>
                                        )
                                    })
                                }
                            </div>
                            <div className={styles.posts_container}>
                            {
                        getPosts()?.map((item)=>{
                            return(
                            <UserPost key={item.post_id} item={item}/>  
                            
                            )
                        })

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