import React, { Component } from 'react';
import styles from '../../Styles/Header.module.css'
class Search extends Component {
    render() {
        return (
            <div className={styles.header_search_container}>
                <img className={styles.header_search_icon} src="/images/search.svg" alt="search"/>
                <input style={{outline:"none",border:"1px solid grey",borderRadius:"5px"}} type="text" name="" placeholder="search" id=""/>
            </div>
        );
    }
}

export default Search;