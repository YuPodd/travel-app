import React from 'react';
import GetCurrency from '../../services/getCurrency';

const Currency = () => {
  const course = new GetCurrency()

  React.useEffect(() => {
    course.getCurrency('RUB').then((data) => console.log(data))
  })

  return (
    <div>
      <p>USD</p>
      <p>RUB</p>
    </div>
  )
}

export default Currency;
