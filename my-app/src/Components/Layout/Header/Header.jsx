import React, { Component } from 'react';
import HeaderLinks from './HeaderLinks';
import Search from './Search';
import styles from '../../Styles/Header.module.css'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className = {`${styles.header_container}`}>
                    <div className={styles.logo_container}>
                        
                            <img className={styles.header_logo} src="/Images/logo.png" alt="logo"/>
                        
                    </div>
                    <Search />
                    <HeaderLinks />
                    
                </div>
            </header>
            
        );
    }
}

export default Header;