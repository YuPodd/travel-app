import './Widget.css';
import Currency from "../Currency/Currency"
import Weather from "../Weather/Weather"
import DateClock from '../DateClock/DateClock';

const Widget = ({city, money}) => {
  return (
    <div className='widget'>
      <Weather city={city} />
      <Currency money={money} />
      <DateClock />
    </div>
  )
}

export default Widget;
