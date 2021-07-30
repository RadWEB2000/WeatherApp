import React from 'react';
import styles from './Social.module.scss';
export const Social = ({link,title, children}) => {
    return (
        <a
            href={link}
            title={ title}
            target="_blank"
            rel="noreferer noopener noreferrer"
            className={styles.social__item}
        >
            { children}
        </a>
            
    )
}

