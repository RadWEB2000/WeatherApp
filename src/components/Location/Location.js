import React from 'react';
import styles from './Location.module.scss';
import {Lang} from './Language/Language';
import {Search} from './Search/Search';

export const Location = () => {

    return(
        <>
        <Lang/>
            
        <header className={styles.header}>
            <Search/>
        </header>
        </>       
    )
}