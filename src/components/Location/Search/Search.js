import React from 'react';
import styles from './Search.module.scss';

// function searchValue(e) {
//     e.preventDefault();
//     console.log(e.target.value)
// };

// 




export class Search extends React.Component {
    

    
    searchValueChange = () => {
        const weatherKeyAPI = '33225bdb156c2228112220047c76d150';
        const searchValue = this.refs.location.value;
        // console.log(searchValue);

        fetch(`api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${weatherKeyAPI}`)
            .then(res => res.json())
            .then(data => console.log(data))
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
                    {/* <span id="pl">Wpisz nazwę swojego miasta:</span>         */}
                </label>
                <div className={styles.search__input}>
                    <input
                    type="text"
                    name="location"
                    id="location"
                    ref="location"
                    onChange={ this.searchValueChange}
                    />
                    <span></span>
                </div>
            </div>
        )
    }
}