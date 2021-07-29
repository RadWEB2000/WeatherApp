import React from 'react';
import styles from './Language.module.scss';

export const Lang = () => {
    return (
        <form className={styles.langs}>
            <div className={styles.langs__item}>
                <label
                    className={(styles.langs__item__label)}
                    htmlFor="english"
                >
                    English
                </label>
                <input
                    checked
                    id="english"
                    name="lang"
                    type="radio"
                />
            </div>
            <div className={styles.langs__item}>
                <label
                    className={(styles.langs__item__label), (styles.label__select)}
                    htmlFor="polish"
                >
                        Polski
                </label>
                <input
                    id="polish"
                    name="lang"
                    type="radio"
                />
            </div>
        </form>
    )
}