export default class GetCurrency {

  getCurrency = async (val) => {
    try {
      // const responseUSD = await fetch(`https://api.ratesapi.io/api/latest?base=USD&symbols=${val}`).then(data => data.json());
      const responseUSD = await fetch(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${val}`).then(data => data.json());
      // const responseEUR = await fetch(`https://api.ratesapi.io/api/latest?base=EUR&symbols=${val}`).then(data => data.json());
      // const responseEUR = await fetch(`https://api.exchangeratesapi.io/latest?base=EUR&symbols=${val}`).then(data => data.json());
      // const responseRUB = await fetch(`https://api.ratesapi.io/api/latest?base=RUB&symbols=${val}`).then(data => data.json());
      const responseRUB = await fetch(`https://api.exchangeratesapi.io/latest?base=RUB&symbols=${val}`).then(data => data.json());

      const responseAll = await Promise.all([responseUSD, responseRUB]);

      return responseAll;
    } catch (error) {
      return error;
    }
  }
}
