const $city = document.getElementById("cityName");
let long = "";
let lat = "";

const url = "api.openweathermap.org/data/2.5/weather?q=";
const units = "metric";
const key = "86798aad821bb8c4ee2887a3873485ff";

export async function weatherData() {
  try {
    
    
    let city = $city.value;

    if (!city) {
      city = "Dubai";
      const errorMsg = document.querySelector(".error");
      errorMsg.textContent = "";
    }

  
    const response = await fetch(`${url}${city}&APPID=${key}&units=${units}`);
    const data = await response.json();

    const currentWeatherDescription = await data.weather[0].description;
    const temperature = await data.main.temp;
    const feelsLike = await data.main.feels_like;
    const pressure = await data.main.pressure;
    const humidity = await data.main.humidity;
    const windSpeed = await data.wind.speed;
    const icon = await data.weather[0].icon;
    long = await data.coord.lon;
    lat = await data.coord.lat;

    return {
      currentWeatherDescription,
      temperature,
      feelsLike,
      pressure,
      humidity,
      windSpeed,
      icon,
      long,
      lat,
    };
  } catch (error) {
    const errorMsg = document.querySelector(".error");
    //errorMsg.textContent = "City not found";
  }
}
