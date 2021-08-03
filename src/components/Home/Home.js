import React, { Component } from 'react';
import { GoSearch as SearchIcon } from "react-icons/go";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import styles from './Home.module.scss';

const weatherKey = '33225bdb156c2228112220047c76d150';


export class Home extends Component {

    state = {
        clouds: '',
        cod: '',
        country: '',
        description: '',
        humidity: '',
        icon:'',
        id: '',
        lat: '',
        lng: '',
        temp: '',
        name: '',
        pressure: '',
        sunrise: '',
        sunset: '',
        timezone: '',
        tempLike: '',
        tempMax: '',
        tempMin: '',
        visibility: '',
        windDirection:'',
        windSpeed: ''
    }


    searchValueChange = (e) => {
        e.preventDefault();
        const searchValue = this.refs.city.value;
        console.log(searchValue);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${weatherKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const time = new Date().toLocaleString();
                
                this.setState({
                    clouds:data.clouds.all,
                    country: data.sys.country,
                    description:data.weather[0].description,
                    humidity: data.main.humidity,
                    icon: data.weather[0].icon,
                    id: data.sys.id,
                    lat: data.coord.lat,
                    lng: data.coord.lon,
                    name: this.refs.city.value,
                    pressure: data.main.pressure,
                    sunrise:data.sys.sunrise,
                    sunset: data.sys.sunset,
                    timezone: data.timezone,
                    temp: data.main.temp,
                    tempLike: data.main.feels_like,
                    tempMax: data.main.temp_max,
                    tempMin: data.main.temp_min,
                    visibility: data.visibility / 100,
                    windDirection: data.wind.gust,
                    windSpeed: data.wind.speed
                })

            })
        
        
    }

    


    render() {
        
        

        const mapProps = {
            style: {
                height: '60vh',
                width: '100%'
            },
            center: {
                lat: this.state.lat,
                lng: this.state.lng
            },
            zoom:12
        }


        const sunriseTime = new Date(this.state.sunrise * 1000).toLocaleTimeString;
        const sunsetTime = new Date(this.state.sunset * 1000).toLocaleTimeString;

        return (
            <>
            <header className={styles.header}>
                <form
                    className={styles.form}
                    onSubmit={this.searchValueChange}
                >
                    <div className={styles.form__item}>
                        <div className={styles.form__item__input}>
                            <input 
                                type="text"
                                name="city"
                                id="city"
                                ref="city"
                                placeholder="Enter your city name"
                            />
                            <span></span>
                        </div>
                    </div>
                    <button className={styles.form__button}>
                        <SearchIcon className={styles.form__button__icon}/>
                    </button>
                </form>
            </header>
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
                <h1 className={styles.result__title}> {this.state.name}</h1>
                <div className={styles.result__wrapper}>
                     <article className={styles.city}>
                        <section className={styles.city__item}>
                            <b className={styles.city__item__name}>Zip code</b>
                            <p className={styles.city__item__value}> {this.state.country}</p>
                        </section>   
                        <section className={styles.city__item}>
                            <b className={styles.city__item__name}>City id</b>
                            <p className={styles.city__item__value}>{this.state.id}</p>
                        </section>   
                    </article>

                    <article className={styles.time}>
                        <section className={styles.time__item}>
                            <b className={styles.time__item__name}>Sunrise</b>
                            <p className={styles.time__item__value}> {sunriseTime}</p>
                        </section>   
                        <section className={styles.time__item}>
                            <b className={styles.time__item__name}>Timezone</b>
                            <p className={styles.time__item__value}> {this.state.timezone}</p>
                        </section>   
                        <section className={styles.time__item}>
                            <b className={styles.time__item__name}>Sunset</b>
                            <p className={styles.time__item__value}> {sunsetTime}</p>
                        </section>   
                    </article>
                    
                     <article className={styles.temp}>
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Temperature</b>
                            <p className={styles.temp__item__value}>{this.state.temp}°C</p>
                        </section>   
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Feel Temperature</b>
                            <p className={styles.temp__item__value}>{this.state.tempLike}°C</p>
                        </section>  
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Min Temperature</b>
                            <p className={styles.temp__item__value}>{this.state.tempMin}°C</p>
                        </section>  
                        <section className={styles.temp__item}>
                            <b className={styles.temp__item__name}>Max Temperature</b>
                            <p className={styles.temp__item__value}>{this.state.tempMax}°C</p>
                        </section>  
                    </article>
                    
                    <article className={styles.clouds}>
                        <section className={styles.clouds__item}>
                            <b className={styles.clouds__item__name}>Clouds</b>
                            <p className={styles.clouds__item__value}> {this.state.clouds}</p>
                        </section>   
                        <section className={styles.clouds__item}>
                            <b className={styles.clouds__item__name}>Visibility</b>
                            <p className={styles.clouds__item__value}> {this.state.visibility}%</p>
                        </section>  
                    </article>
                    
                    <article className={styles.rain}>
                        <section className={styles.rain__item}>
                            <b className={styles.rain__item__name}>The volume of rainfall during 1 hour</b>
                            <p className={styles.rain__item__value}>1m<sup>3</sup></p>
                        </section>   
                    </article>
                    
                    <article className={styles.wind}>
                        <section className={styles.wind__item}>
                            <b className={styles.wind__item__name}>Wind speed</b>
                            <p className={styles.wind__item__value}>{this.state.windSpeed}m/s</p>
                        </section>   
                        <section className={styles.wind__item}>
                            <b className={styles.wind__item__name}>Wind direction</b>
                            <p className={styles.wind__item__value}>{this.state.windDirection}</p>
                        </section>  
                    </article>

                </div>
            </main>
            </>
        )
    }
}
