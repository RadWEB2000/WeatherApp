
import React from 'react';

import Map from './Map/Map';
import { City } from './City/City';
import { Temperature } from './Temperature/Temperature';
import { Rainfall } from './Rainfall/Rainfall';
import styles from './Result.module.scss';

export const Result = () => {
    return (
        <div className={styles.result}>
            <Map/>
            <City/>
            <Temperature/>
            <Rainfall />
        </div>
    )
}