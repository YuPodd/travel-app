import React from 'react';
import GetCurrency from '../../services/getCurrency';

const Currency = ({money}) => {
  const course = new GetCurrency();
  const [currencyUSD, setCurrencyUSD] = React.useState(0);
  const [currencyRUB, setCurrencyRUB] = React.useState(0);
  const [currencyEUR, setCurrencyEUR] = React.useState(0);

  React.useEffect(() => {
    (money === 'EUR') ? setCurrencyEUR(1) : course.getCurrencyEUR(money).then((data) => {
      setCurrencyEUR(data.rates[money].toFixed(2))
    })
    course.getCurrencyUSD(money).then((data) => {
      setCurrencyUSD(data.rates[money].toFixed(2))
    })
    course.getCurrencyRUB(money).then((data) => {
      setCurrencyRUB(data.rates[money].toFixed(2))
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
