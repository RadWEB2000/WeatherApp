
import React from 'react';

import { Map } from './Map/Map';
import { City } from './City/City';
import { Temperature } from './Temperature/Temperature';
import { Rainfall } from './Rainfall/Rainfall';


export const Result = () => {
    return(
        <>
            <Map/>
            <City/>
            <Temperature/>
            <Rainfall />
        </>
    )
}