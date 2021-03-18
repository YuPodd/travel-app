import React from 'react';
import './Weather.css';
import GetWeather from '../../services/getWeather';
import Context from '../Context';

const WeatherDescription = ({weather}) => {
  if (weather) {
    return(
      <div className='widget-weather'>
        <div className='weather__descr'>
          <span>{ weather.current.condition.text }</span>
        </div>
        <img src={weather.current.condition.icon} alt='weather' width='48px' height='48px' />
        <div className='weather__temp'>
          <span>{ weather.current.temp_c }&deg;</span>
        </div>
      </div>
    )
  }
  return null;
}

export default function Weather({city}) {
  const weatherData = new GetWeather();
  const [weather, setWeather] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false)
  const value = React.useContext(Context);

  React.useEffect(() => {
    setIsLoading(true);
    weatherData.getWeather(city, value.lang).then((data) => {
      setWeather(data);
      setIsLoading(false);
    });

  }, [city, value.lang])

  const content = isLoading ? 'Loading...' : <WeatherDescription weather={ weather }/>

  return (
    <div className='widget-weather'>
      {content}
    </div>
  )
}


