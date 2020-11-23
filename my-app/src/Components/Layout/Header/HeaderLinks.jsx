import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import styles from '../../Styles/Header.module.css'
import { Avatar } from '../Common';
const headerLinks = [
    {
        to:"/",
        img_src:"/Images/home.svg"
    },
    {
        to:"/Inbox",
        img_src : "/Images/send.svg"
    },
    {
        to:"/Explore",
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

                {/*Avatar Pic */}
                <li><Avatar/></li>
            </ul>
        );
    }
}

export default HeaderLinks;