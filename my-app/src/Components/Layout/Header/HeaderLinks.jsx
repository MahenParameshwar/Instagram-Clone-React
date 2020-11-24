import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styles from '../../Styles/Header.module.css'
import Avatar from '@material-ui/core/Avatar'

const headerLinks = [
    {
        to:"/",
        img_src:"/Images/home.png"
    },
    {
        to:"/inbox",
        img_src : "/Images/send.svg"
    },
    {
        to:"/explore",
        img_src : "/Images/explore.svg"
    }
]


class HeaderLinks extends Component {
    render() {
        return (
            <ul className={styles.header_links_container}>
                {
                    headerLinks.map((link,index)=>{
                        return (
                            <li key={index+1}>
                                <NavLink
                                to={link.to}>
                                    <img className={styles.img_link} 
                                    src={link.img_src} 
                                    alt="link-img"/>
                                </NavLink>
                            </li>
                        )
                    })
                }
                {/*Follow Users*/}
                <li>
                    <img src="/Images/heart.svg" className={styles.img_link} alt=""/>
                </li>
                {/*Avatar Pic */}
                <li>
                    <Avatar
                    className={styles.avatar_img}
            
                    alt="Mahen"
                    src="/Images/Avatar.png"
                    />
                </li>
            </ul>
        );
    }
}

export default HeaderLinks;