export default class GetCurrency {

  getCurrencyUSD = async (val) => {
    try {
      // const responseUSD = await fetch(`https://api.ratesapi.io/api/latest?base=USD&symbols=${val}`).then(data => data.json());
      const responseUSD = await fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${val}`).then(data => data.json());

      return responseUSD;
    } catch (error) {
      return error;
    }
  }

  getCurrencyEUR = async (val) => {
    try {
      // const responseEUR = await fetch(`https://api.ratesapi.io/api/latest?base=EUR&symbols=${val}`).then(data => data.json());
      const responseEUR = await fetch(`https://api.exchangeratesapi.io/latest?base=EUR&symbols=${val}`).then(data => data.json());

      return responseEUR;
    } catch (error) {
      return error;
    }
  }

  getCurrencyRUB = async (val) => {
    try {
      // const responseRUB = await fetch(`https://api.ratesapi.io/api/latest?base=RUB&symbols=${val}`).then(data => data.json());
      const responseRUB = await fetch(`https://api.exchangeratesapi.io/latest?base=RUB&symbols=${val}`).then(data => data.json());

      return responseRUB;
    } catch (error) {
      return error;
    }
  }
}
