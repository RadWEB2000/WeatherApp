
import React from 'react';

import { City } from './City/City';
import { Temperature } from './Temperature/Temperature';
import { Rainfall } from './Rainfall/Rainfall';


export const Result = () => {
    return(
        <>
            <City/>
            <Temperature/>
            <Rainfall />
        </>
    )
}