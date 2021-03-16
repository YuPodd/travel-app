import './Widget.css';
import Currency from "../Currency/Currency"
import Weather from "../Weather/Weather"

const Widget = ({city, money}) => {
  return (
    <div className='widget'>
      
      <Weather city={city} />
      <Currency money={money} />
    </div>
  )
}

export default Widget;
