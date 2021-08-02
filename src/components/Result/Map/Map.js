import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { FiMapPin as MarkerIcon } from 'react-icons/fi';
import styles from '../Result.module.scss';


const mapProps = {
    style: {
        height: '80vh',
        width: '100%'
    },
    center: {
        lat: 52.0818,
        lng: 16.8962
    },
    zoom:12
}
export class Map extends React.Component {
    render() {
        return (
            <LoadScript
                googleMapsApiKey="AIzaSyCbwcH7qQ7r__ATB5vJddSKpSYXX0Z-5wY"
            >
                <GoogleMap
                    mapContainerStyle={mapProps.style}
                    center={mapProps.center}
                    zoom={mapProps.zoom}
                    options={{mapId:'4eb5d6be4fc7ed94'}}
                >
                    <MarkerIcon
                        className={styles.marker}
                    />
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map
