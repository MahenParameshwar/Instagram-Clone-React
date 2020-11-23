import React, { Component } from 'react';
import HeaderLinks from './HeaderLinks';
import Search from './Search';
import styles from '../../Styles/Header.module.css'
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="container header">
                <div className = {`${styles.header_container} main_container`}>
                    <div>
                        <NavLink
                        to="/">
                            <img src="/Images/logo.png" alt="logo"/>
                        </NavLink>
                    </div>
                    <div>
                        <Search />
                    </div>
                    <div>
                        <HeaderLinks />
                    </div>
                </div>
            </header>
            
        );
    }
}

export default Header;