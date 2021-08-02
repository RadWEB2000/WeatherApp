import React from 'react';
import styles from './Search.module.scss';
const weatherKeyAPI = '33225bdb156c2228112220047c76d150';

// function searchValue(e) {
//     e.preventDefault();
//     console.log(e.target.value)
// };

// 




export class Search extends React.Component {
    
    state = {
        clouds: '',
        cod: '',
        country: '',
        description: '',
        error:'',
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

    
    searchValueChange = () => {
        const searchValue = this.refs.location.value;
        console.log(searchValue);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${weatherKeyAPI}&units=metric`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const time = new Date().toLocaleString();
                this.setState({
                    clouds:data.clouds.all,
                    cod: data.cod,
                    country: data.sys.country,
                    description: data.weatcher.description,
                    error: false,
                    humidity: data.main.humidity,
                    icon: '',
                    id: data.id,
                    lat: data.coord.lat,
                    lng: data.coord.lon,
                    pressure: data.main.pressure,
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset,
                    timezone: '',
                    temp: data.main.temp,
                    tempLike: data.main.feels_like,
                    tempMax: data.main.temp_max,
                    tempMin: data.main.temp_min,
                    visibility: data.visibility,
                    windDirection: data.wind.deg,
                    windSpeed: data.wind.speed
                })
                }
            )
            .catch(err => console.log(err))
    }
    
    componentDidMount() {
    }

    render() {
        return (
             <div className={styles.search}>
                <label
                    htmlFor="location"
                    className={styles.search__label}
                >
                    <span id="eng">ENTER YOUR CITY NAME:</span>        
                </label>
                <div className={styles.search__input}>
                    <input
                    type="text"
                    ref="location"
                    onChange={ this.searchValueChange}
                    />
                    <span></span>
                </div>
            </div>
        )
    }
}