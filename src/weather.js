const $city = document.getElementById('cityName');

const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
const units = 'metric';
const key = '86798aad821bb8c4ee2887a3873485ff';

export async function weatherData() {
  let city = $city.value;

  const response = await fetch(`${url}${city}&APPID=${key}&units=${units}`);
  const data = await response.json();

  const currentWeatherDescription = await data.weather[0].description;
  const temperature = await data.main.temp;
  const feelsLike = await data.main.feels_like;
  const pressure = await data.main.pressure;
  const humidity = await data.main.humidity;
  const visibility = await data.main.visibility;
  const windSpeed = await data.wind.speed;
  const icon = await data.weather[0].icon;
  const dt = await data.dt;
  const timezone = await data.timezone;

  return { currentWeatherDescription, temperature, feelsLike, pressure, humidity, visibility, windSpeed, icon, dt, timezone
  };
};

//export {weatherData};

//console.log(weatherData());
