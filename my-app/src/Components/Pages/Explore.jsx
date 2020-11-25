import { StylesProvider } from '@material-ui/core';
import React, { Component } from 'react';
import {ExploreItem} from "../Layout/Explore/ExploreItem";

import styles from '../Styles/explore.module.css'


class Explore extends Component {
    render() {
        return (
            <div className="container">
                <main className="main_container">
                    <div >
                        <div  >
                            <div className = {styles.explore}>
                                
                                <ExploreItem src = "http://static.filmfare.com/content/2014/Jan/s1_1388990788.jpg"/>
                
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "http://static.filmfare.com/content/2014/Jan/s1_1388990788.jpg"/>
                                <ExploreItem src = "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"/>
                                <ExploreItem src = "https://th.bing.com/th/id/OIP.lEzCoRieeb7r9Znkjk_LMAHaHa?pid=Api&rs=1"/>
                            </div>
                        </div>
                    </div>

                    
                </main>
            </div>
        );
    }
}

export default Explore;