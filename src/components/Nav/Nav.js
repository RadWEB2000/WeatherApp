import React from 'react';
import styles from './Nav.module.scss';
export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <li>Home</li>
            <li>About</li>
        </nav>
    )
}