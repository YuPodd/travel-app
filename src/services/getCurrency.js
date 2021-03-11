export default class GetCurrency {

  getCurrency = async (val) => {
    try {
      // const responseUSD = await fetch(`https://api.ratesapi.io/api/latest?base=USD&symbols=${val}`);
      // const responseEUR = await fetch(`https://api.ratesapi.io/api/latest?base=EUR&symbols=${val}`);
      // const responseRUB = await fetch(`https://api.ratesapi.io/api/latest?base=RUB&symbols=${val}`);

      const responseAll = await Promise.all([
        fetch(`https://api.ratesapi.io/api/latest?base=USD&symbols=${val}`),
        fetch(`https://api.ratesapi.io/api/latest?base=EUR&symbols=${val}`)]);

        // if (!responseAll.ok) {
        //   throw new Error('По запрошеному URL получить данные не удалось');
        // }

      // const data = await responseAll.json();

      return await responseAll.json();
    } catch (error) {
      return error;
    }
  }
}
