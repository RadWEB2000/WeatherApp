import React from 'react';
import styles from './City.module.scss';



export const City = () => {
  return (
    <article className={styles.city__wrapper}>
          <h1 className={styles.city__wrapper__title}>
            Warszawa
          </h1>
          <section className={styles.city__wrapper__item}>
            <div className={styles.city__wrapper__item__containter}>
              <b className={styles.city__wrapper__item__containter__title}>Zip code</b>
              <p className={styles.city__wrapper__item__containter__text}>00 - 000</p>
            </div>
            <div className={styles.city__wrapper__item__containter}>
              <b className={styles.city__wrapper__item__containter__title}>City id</b>
              <p className={styles.city__wrapper__item__containter__text}>0</p>
            </div>
            <div className={styles.city__wrapper__item__containter}>
              <b className={styles.city__wrapper__item__containter__title}>Zip country code</b>
              <p className={styles.city__wrapper__item__containter__text}>PL</p>
            </div>
          </section>
          <section className={styles.city__wrapper__item}>
              <div className={styles.city__wrapper__item__containter}>
                <b className={styles.city__wrapper__item__containter__title}>Timezone</b>
                <p className={styles.city__wrapper__item__containter__text}>28800s</p>
              </div>
              <div className={styles.city__wrapper__item__containter}>
                <b className={styles.city__wrapper__item__containter__title}>Sunrise time</b>
                <p className={styles.city__wrapper__item__containter__text}>2020-01-07T15:22:59</p>
              </div>
              <div className={styles.city__wrapper__item__containter}>
                <b className={styles.city__wrapper__item__containter__title}>Sunset time</b>
                <p className={styles.city__wrapper__item__containter__text}>2020-01-08T01:05:37</p>
              </div>
            </section>
        </article>
    )
}