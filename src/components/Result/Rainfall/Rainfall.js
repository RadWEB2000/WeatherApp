import React from 'react';
import { FiSun as SunIcon } from "react-icons/fi";
import styles from './Rainfall.module.scss';


export const Rainfall = () => {
    return (

       <article className={styles.rain}>
          <section className={styles.rain__wrapper}>
            <div className={styles.rain__wrapper__item}>
              <b className={styles.rain__wrapper__item__title}>Wind speed</b>
              <p className={styles.rain__wrapper__item__text}>0.93 m/s</p>
            </div>
            <div className={styles.rain__wrapper__item}>
              <b className={styles.rain__wrapper__item__title}>Wind name</b>
              <p className={styles.rain__wrapper__item__text}>calm</p>
            </div>
            <div className={styles.rain__wrapper__item}>
              <b className={styles.rain__wrapper__item__title}>Wind direction</b>
              <p className={styles.rain__wrapper__item__text}>23</p>
            </div>
            <div className={styles.rain__wrapper__item}>
              <b className={styles.rain__wrapper__item__title}>Wind direction name</b>
              <p className={styles.rain__wrapper__item__text}>North-northeast</p>
            </div>
          </section>
        

          <section className={styles.rain__wrapper}>
               <div className={styles.rain__wrapper__item}>
                <b className={styles.rain__wrapper__item__title}>Clouds</b>
                <p className={styles.rain__wrapper__item__text}>Clear sky</p>
              </div>
              <div className={styles.rain__wrapper__item}>
                <b className={styles.rain__wrapper__item__title}>Visibility</b>
                <p className={styles.rain__wrapper__item__text}>16093</p>
              </div>
            </section>
         <section className={styles.rain__wrapper}>
               <div className={styles.rain__wrapper__item}>
                <b className={styles.rain__wrapper__item__title}>Precipitation</b>
                <p className={styles.rain__wrapper__item__text}>clear</p>
              </div>
              <div className={styles.rain__wrapper__item}>
                <b className={styles.rain__wrapper__item__title}>Weather icon</b>
                <p className={styles.rain__wrapper__item__text}><SunIcon/></p>
              </div>
            </section>
         <section className={styles.rain__wrapper}>
               <div className={styles.rain__wrapper__item}>
                <b className={styles.rain__wrapper__item__title}>The volume of rain during 1 hour</b>
                <p className={styles.rain__wrapper__item__text}>1 m<sup>3</sup></p>
              </div>
              <div className={styles.rain__wrapper__item}>
                <b className={styles.rain__wrapper__item__title}>The volume of snow during 1 hour</b>
                <p className={styles.rain__wrapper__item__text}>1 m<sup>3</sup></p>
              </div>
            </section>
        </article>
    )
}