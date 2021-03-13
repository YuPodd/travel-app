import React from 'react';
import GetCurrency from '../../services/getCurrency';

const Currency = ({money}) => {
  const course = new GetCurrency();
  const [currencyUSD, setCurrencyUSD] = React.useState(0);
  const [currencyEUR,setCurrencyEUR] = React.useState(0);
  const [currencyRUB, setCurrencyRUB] = React.useState(0);

  React.useEffect(() => {
    course.getCurrency(money).then((data) => {
      setCurrencyUSD(data[0].rates[money].toFixed(2))
      setCurrencyEUR(data[1].rates[money].toFixed(2))
      setCurrencyRUB(data[2].rates[money].toFixed(2))

    })

  })

  return (
    <div className='widget-currency'>
      <p>USD : {currencyUSD}</p>
      <p>EUR : {currencyEUR}</p>
      <p>RUB : {currencyRUB}</p>
    </div>
  )
}

export default Currency;
