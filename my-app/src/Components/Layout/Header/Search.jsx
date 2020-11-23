import React, { Component } from 'react';
import styles from '../../Styles/Header.module.css'
class Search extends Component {
    render() {
        return (
            <div className={styles.header_search_container}>
                <img className={styles.header_search_icon} src="/images/search.svg" alt="search"/>
                <input type="text" name="" placeholder="search" id=""/>
            </div>
        );
    }
}

export default Search;