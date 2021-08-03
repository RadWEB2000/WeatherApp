import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './Result.module.scss';




const mapProps = {
    style: {
        height: '60vh',
        width: '100%'
    },
    center: {
        lat: 52.0818,
        lng: 16.8962
    },
    zoom:12
}


export class Result extends Component {
    render() {
        return (
            <main className={styles.result}>
                <LoadScript
                    googleMapsApiKey="AIzaSyCbwcH7qQ7r__ATB5vJddSKpSYXX0Z-5wY"
                    className={styles.map}
                >
                    <GoogleMap
                        mapContainerStyle={mapProps.style}
                        center={mapProps.center}
                        zoom={mapProps.zoom}
                        options={{mapId:'9cf98a4c24218f39'}}
                    >   
                        <Marker
                            position={mapProps.center}
                        />
                    </GoogleMap>
                </LoadScript>
                <h1 className={styles.result__title}>City name</h1>
                <div className={styles.result__wrapper}>
                     <article className={styles.city}>
                        <section className={styles.city__item}>
                            <b className={styles.city__item__name}>Zip code</b>
                            <p className={styles.city__item__value}>00-00</p>
                        </section>   
                        <section className={styles.city__item}>
                            <b className={styles.city__item__name}>City id</b>
                            <p className={styles.city__item__value}>132456987741</p>
                        </section>   
                        <section className={styles.city__item}>
                            <b className={styles.city__item__name}>Country code</b>
                            <p className={styles.city__item__value}>PL</p>
                        </section>   
                    </article>

                    <article className={styles.time}>
                        <section className={styles.time__item}>
                            <b className={styles.time__item__name}>Sunrise</b>
                            <p className={styles.time__item__value}>2020-01-07T15:22:59</p>
                        </section>   
                        <section className={styles.time__item}>
                            <b className={styles.time__item__name}>Timezone</b>
                            <p className={styles.time__item__value}>28 800</p>
                        </section>   
                        <section className={styles.time__item}>
                            <b className={styles.time__item__name}>Sunset</b>
                            <p className={styles.time__item__value}>2020-01-08T01:05:37</p>
                        </section>   
                    </article>
                    
                     <article className={styles.temp}>
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Temperature</b>
                            <p className={styles.temp__item__value}>16 °C</p>
                        </section>   
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Feel Temperature</b>
                            <p className={styles.temp__item__value}>16 °C</p>
                        </section>  
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Min Temperature</b>
                            <p className={styles.temp__item__value}>16 °C</p>
                        </section>  
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Max Temperature</b>
                            <p className={styles.temp__item__value}>16 °C</p>
                        </section>  
                    </article>
                    
                    <article className={styles.clouds}>
                        <section className={styles.clouds__item}>
                            <b className={styles.clouds__item__name}>Clouds</b>
                            <p className={styles.clouds__item__value}>Clear sky</p>
                        </section>   
                        <section className={styles.clouds__item}>
                            <b className={styles.clouds__item__name}>Visibility</b>
                            <p className={styles.clouds__item__value}>16093</p>
                        </section>  
                    </article>
                    
                    <article className={styles.rain}>
                        <section className={styles.rain__item}>
                            <b className={styles.rain__item__name}>The volume of rain during 1 hour</b>
                            <p className={styles.rain__item__value}>1m<sup>3</sup></p>
                        </section>   
                        <section className={styles.rain__item}>
                            <b className={styles.rain__item__name}>The volume of snow during 1 hour</b>
                            <p className={styles.rain__item__value}>1m<sup>3</sup></p>
                        </section>                  
                    </article>
                    
                    <article className={styles.wind}>
                        <section className={styles.wind__item}>
                            <b className={styles.wind__item__name}>Wind speed</b>
                            <p className={styles.wind__item__value}>0.93 m/s</p>
                        </section>   
                        <section className={styles.wind__item}>
                            <b className={styles.wind__item__name}>Wind direction</b>
                            <p className={styles.wind__item__value}>23</p>
                        </section>  
                    </article>

                </div>
            </main>
        )
    }
}
