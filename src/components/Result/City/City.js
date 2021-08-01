import React from 'react';
import styles from '../Result.module.scss';


export const City = () => {
  return (
    <article className={styles.city}>
          <h1 className={styles.city__title}>
            Warszawa
          </h1>
          <section className={styles.city__wrapper}>
            <div className={styles.city__wrapper__item}>
              <b className={styles.city__wrapper__item__title}>Zip code</b>
              <p className={styles.city__wrapper__item__text}>00 - 000</p>
            </div>
            <div className={styles.city__wrapper__item}>
              <b className={styles.city__wrapper__item__title}>City id</b>
              <p className={styles.city__wrapper__item__text}>0</p>
            </div>
            <div className={styles.city__wrapper__item}>
              <b className={styles.city__wrapper__item__title}>Zip country code</b>
              <p className={styles.city__wrapper__item__text}>PL</p>
            </div>
          </section>
          <section className={styles.city__wrapper}>
              <div className={styles.city__wrapper__item}>
                <b className={styles.city__wrapper__item__title}>Timezone</b>
                <p className={styles.city__wrapper__item__text}>28800s</p>
              </div>
              <div className={styles.city__wrapper__item}>
                <b className={styles.city__wrapper__item__title}>Sunrise time</b>
                <p className={styles.city__wrapper__item__text}>2020-01-07T15:22:59</p>
              </div>
              <div className={styles.city__wrapper__item}>
                <b className={styles.city__wrapper__item__title}>Sunset time</b>
                <p className={styles.city__wrapper__item__text}>2020-01-08T01:05:37</p>
              </div>
            </section>
        </article>
    )
}