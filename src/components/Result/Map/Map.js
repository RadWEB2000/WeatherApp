import React from 'react'
import { GoogleMap, LoadScript, useLoadScript} from '@react-google-maps/api'
import styles from './Map.module.scss';

const mapProps = {
    style: {
        height: '50vh',
        width: '100%'
    },
    center: {
        lat: -3.745,
        lng: -38.523
    },
    zoom:8
}




export class Map extends React.Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey="AIzaSyCbwcH7qQ7r__ATB5vJddSKpSYXX0Z-5wY"
                className={styles.map__wrapper}
                    
            >
                <GoogleMap
                    mapContainerStyle={mapProps.style}
                    center={mapProps.center}
                    zoom={mapProps.zoom}
                    options={{mapId:'4eb5d6be4fc7ed94'}}
                    className={styles.map__wrapper__item}
                >

                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map
