import React from 'react';

export const Temperature = () => {
    return (
         <article>
          <div>
            <p>
              Temperatura minimalna {/* Minimal temperature */} 
              <br />
              273.15 K
            </p>
            <p>
              Temperatura {/* Temperature */} 
              <br />
              278.07 K
            </p>
            <p>
              Temperatura maksymalna {/* Maximal temperature */}
              <br />
              282.59 K
            </p>
            <p>
              Temperatura odczuwalna {/* Feels like - odczuwalna temperatura */ }
            </p>
          </div>
          <hr/>
          <div>
            <p>
              Wilgotność { /* humidity.value */}
              <br />
              86
            </p>
            <p>
              Jednostka wilgotności {/* humidity.unit */}
              <br />
              %
            </p>
          </div>
          <hr/>
          <div>
            <p>
              Ciśnienie { /* pressure.value */}
              <br />
              86
            </p>
            <p>
              Jednostka ciśnienia {/* pressure.unit */}
              <br />
              hPa
            </p>
          </div>
        </article>
    )
}