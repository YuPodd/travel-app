export default class GetWeather {
  _API_KEY = '4df0b6980dd8470aa54193407203005';
  getWeather = async (city, lang) => {
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${this._API_KEY}&q=${city}&days=3&lang=${lang}`);
        if (!response.ok) {
          throw new Error('По запрошеному URL получить данные не удалось');
        }

      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  }
}
