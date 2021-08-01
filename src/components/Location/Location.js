import React from 'react';
import styles from './Location.module.scss';
import {Search} from './Search/Search';

export const Location = () => {

    return(
        <header className={styles.header}>
            <Search/>
        </header>
    )
}