import { useEffect, useState, useContext } from 'react';
import './DateClock.css';
import Context from '../Context'

const DateClock = () => {
  // const [timer, setTimer] = useState(0);

  // const date = new Date();

  // useEffect(() => {

  // })
  const value = useContext(Context);
  const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
  };
  const date = new Date().toLocaleString(value.lang, options);


  return (
    <div className='widget-date-clock'>
      <div className='date' >
        {date}
      </div>
      <div className='clock' >
        <div>{ '00' }</div>
        <div>{ '00' }</div>
        <div>{ '00' }</div>
      </div>
    </div>
  )
}

export default DateClock;
