import React from 'react';

export const City = () => {
    return (
        <article className="silver">
          <div>
            <h1> {/* pierwszy blok */ }
              {/* nazwa miasta -> city */}
              Warszawa
            </h1>
            <br/>
            <b>
              {/* kod pocztowy -> zip code */}
              00-000
            </b>

            <p>
              {/* id miasta -> id */}
              id = 0
            </p>
          </div>
          <hr/>
          <div>
            <p>
              {/* kod kraju -> zip country code */}
              zip-country cod:
              <br/>
              US
            </p>
            <p>
              Strefa czasowa :
              <br/>
              {/* time zone - strefa czasowa / przesuniecie w sekundach od UTC */}
              - 28 800 s -> 8h
            </p>
          </div>
          <hr/>
          <div>
            <span>
              Czas wschodu słońca
              <br/>
              {/*ikona słońca  --- sunrise time*/}
              2020-01-07T15:22:59
            </span>

            <span>
              Czas zachodu słońca
              <br/>
              {/*ikona księżyca  --- sunset time*/}
              2020-01-08T01:05:37
            </span>
          </div>


        </article>
    )
}