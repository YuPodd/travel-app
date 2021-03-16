import { useState } from 'react';
import CountryMap from './CountryMap';

export default function CountryDescription(props) {
  const [fullScreenMap, setFullScreenMap] = useState(false);

  return (
    <div className="country-description__container" style={{backgroundImage: `url(${props.country.img})`}}>
      <div className="country-description__content">
        <h3>{props.country.name}</h3>
        <p>{props.country.capital}</p>
        <p>{props.country.info}</p>
        <div className={fullScreenMap ? 'full-screen-map__container': 'map__container'}>
          <button className="map-toggler" onClick={() => setFullScreenMap(!fullScreenMap)}>open map</button>
          <CountryMap country={props.country}></CountryMap>
        </div>

      </div>

    </div>
  )
}
