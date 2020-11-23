import React, { Component } from 'react';
import { UserPost } from '../Layout/Post';
import styles from '../Styles/Home.module.css'
// import { Routes } from '../Routes';


class Home extends Component {
    render() {
        return (
            <div className="container">
                <main className="main_container">
                    <section className={styles.home_section}>
                        <div className={styles.home_left_section}>
                            <div className={styles.presentation}>

                            </div>
                            <div className={styles.posts_container}>
                                <UserPost />
                                <UserPost />
                                <UserPost />
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

export default Home;