import React from 'react';
import styles from '../Result.module.scss';

export const Temperature = () => {
  return (
        <article className={styles.temp}>
          <section className={styles.temp__wrapper}>
            <div className={styles.temp__wrapper__item}>
              <b className={styles.temp__wrapper__item__title}>Min Temperature</b>
              <p className={styles.temp__wrapper__item__text}>273.15 K</p>
            </div>
            <div className={styles.temp__wrapper__item}>
              <b className={styles.temp__wrapper__item__title}>Temperature</b>
              <p className={styles.temp__wrapper__item__text}>278.07 K</p>
            </div>
            <div className={styles.temp__wrapper__item}>
              <b className={styles.temp__wrapper__item__title}>Max Temperature</b>
              <p className={styles.temp__wrapper__item__text}>282.59 K</p>
            </div>
            <div className={styles.temp__wrapper__item}>
              <b className={styles.temp__wrapper__item__title}>Feel Temperature</b>
              <p className={styles.temp__wrapper__item__text}>278.07 K</p>
            </div>
          </section>
          <section className={styles.temp__wrapper}>
              <div className={styles.temp__wrapper__item}>
                <b className={styles.temp__wrapper__item__title}>Humidity</b>
                <p className={styles.temp__wrapper__item__text}>86 %</p>
              </div>
              <div className={styles.temp__wrapper__item}>
                <b className={styles.temp__wrapper__item__title}>Pressure</b>
                <p className={styles.temp__wrapper__item__text}>86 hPa</p>
              </div>
            </section>
        </article>  
    )
}