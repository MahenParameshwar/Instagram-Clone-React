import React, { Component } from 'react';
import styles from '../../Styles/Header.module.css'
class Avatar extends Component {
    render() {
        return (
            <img className={styles.avatar_img} src="/Images/avatar.png" alt=""/>
        );
    }
}

export default Avatar;