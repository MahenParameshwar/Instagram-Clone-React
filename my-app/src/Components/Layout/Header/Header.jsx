import React, { Component } from 'react';
import HeaderLinks from './HeaderLinks';
import Search from './Search';
import styles from '../../Styles/Header.module.css'
import SimpleMenu from './SimpleMenu';
import { DataContext } from '../../Context/DataContextProvider';

class Header extends Component {
    render() {
        const {loggedUserData,handelLogOut} = this.context 
        const {avatar_img,username} = loggedUserData
        return (
            <header className="header">
                <div className = {`${styles.header_container}`}>
                    <div className={styles.logo_container}>
                        
                            <img className={styles.header_logo} src="/Images/logo.png" alt="logo"/>
                        
                    </div>
                    <Search />
                    <div>
                        <HeaderLinks />
                        <SimpleMenu
                        avatar = {avatar_img}
                        username = {username}
                        handelLogout = {handelLogOut}
                        history={this.props.history} />
                    </div>
                    
                </div>
            </header>
            
        );
    }
}

Header.contextType = DataContext

export default Header;