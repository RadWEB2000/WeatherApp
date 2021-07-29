import React from 'react';

export const Rainfall = () => {
    return (
         <article className="silver">
        <div>
          <p>
              Prędkość wiatru {/* wind.speed.value */}
              <br />
              0.93
            </p>
            <p>
              Jednostka prędkości wiatru {/* wind.speed.unit */}
              <br />
              m/s
            </p>
            <p>
              Nazwa wiatru {/* wind.speed.name */}
              <br />
              calm
          </p>    
        </div>
        <hr/>
        <div>
          <p>
              Kierunek wiatru {/* wind.direction.value */}
              <br />
              23
            </p>
            <p>
              Kod kierunku wiatru {/* wind.direction.code */}
              <br />
              NNE
            </p>
            <p>
              Pełna nazwa kodu kierunku wiatru {/* wind.direction.name */}
              <br />
              North-northeast
          </p>    
        </div>
        <hr />
        <div>
        <p>
            Zachmurzenie {/* clouds.value  */}
            <br />
            1
          </p>
          <p>
            Nazwa zachmurzenia {/* clouds.name */}
            <br />
            Clear sky
          </p>
          <p>
            Widoczność {/* visibility.value  */}
            <br />
            16093
        </p>    
        </div>
        <hr />
        <div>
          <p>
              Opady {/* precipitation.value  */}
              <br />
              sadasddsa
            </p>
            <p>
              Warunki pogodowe {/* precipitation.mode */}
              <br />
              no
            </p>
          </div>
          <hr />
           <div>
        <p>
            Objętość deszczu w ciągu ostatniej godziny{/* rain.1h */}
            <br />
            1 m<sup>3</sup>
          </p>
          <p>
            Objętość śniegu w ciągu ostatniej godziny {/* snow.1h */}
            <br />
            1 m<sup>3</sup>
          </p>
      
        </div>
       
        <hr />
        <div>
        <p>
            Identyfikator warunków pogodowych {/* weather.value  */}
            <br />
            800
          </p>
          <p>
            Nazwa warunków pogodowych {/* weather.name */}
            <br />
            Clear sky
          </p>
          <p>
            Identyfikator ikony pogody {/* weather.icon  */}
            <br />
            01n
        </p>    
        </div>
       </article>
    )
}