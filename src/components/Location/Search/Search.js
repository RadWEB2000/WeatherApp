import React from 'react';
import styles from './Search.module.scss';

function searchValue(e) {
    console.log(e.value)
};
export const Search = () => {
    return(
         <div className={styles.search}>
                <label
                    htmlFor="location"
                    className={styles.search__label}
                >
                    <span id="eng">ENTER YOUR CITY NAME:</span>        
                    {/* <span id="pl">Wpisz nazwę swojego miasta:</span>         */}
                </label>
                <div className={styles.search__input}>
                    <input
                    type="text"
                    name="location"
                    id="location"
                    onChange={ searchValue}
                    />
                    <span></span>
                </div>
            </div>
    )
}