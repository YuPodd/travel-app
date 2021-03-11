import React from 'react';
import './Weather.css';
import GetWeather from '../../services/getWeather';

const WeatherDescription = ({weather}) => {
  if (weather) {
    return(
      <>
        <div className='weather__descr'>
          <span>{ weather.current.condition.text }</span>
        </div>
        <img src={weather.current.condition.icon} alt='weather' width='42px' height='42px' />
        <div className='weather__temp'>
          <span>{ weather.current.temp_c }</span>
        </div>
      </>
    )
  }
  return null;
}

export default function Weather({city, langApp}) {
  const weatherData = new GetWeather();
  const [weather, setWeather] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true);
    weatherData.getWeather(city, langApp).then((data) => {
      setWeather(data);
      setIsLoading(false);
    });

  }, [city, langApp])

  const content = isLoading ? 'Loading...' : <WeatherDescription weather={ weather }/>

  return (
    <div className='widget-weather'>
      {content}
    </div>
  )
}


