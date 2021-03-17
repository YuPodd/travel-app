import { useEffect, useState, useContext } from 'react';
import './DateClock.css';
import Context from '../Context';
import {getTimeZone, toMainLetter} from '../helpers/helpers';

const DateClock = ({city}) => {
  const value = useContext(Context);
  const optionsDate = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
  };
  const optionsTime = {
    timeZone: getTimeZone(city),
    hour12: false,
  }

  const date = new Date().toLocaleString(value.lang, optionsDate);
  const time = new Date().toLocaleTimeString(value.lang, optionsTime);

  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const timerID = setInterval(() => {
      setTimer(new Date().toLocaleTimeString(value.lang, optionsTime))
    }, 1000);

    return () => clearInterval(timerID);
  }, [])

  return (
    <div className='widget-date-clock'>
      <div className='date' >{toMainLetter(date)}</div>
      <div className='clock' >{ timer }</div>
    </div>
  )
}

export default DateClock;
