import { weatherData } from './weather';

const $city = document.getElementById('cityName');

let tempUnit = '°C';
let temp = '';
let flTemp = '';

function today(){
    let options = { weekday: 'long', hour: 'numeric', minute: "numeric"};
    let date = new Date().toLocaleDateString("en-US", options);
    return date;
}

export const toggleTemperature = () => {
    const temperature = document.querySelector('.temperatureNumber');
    const temperatureUnit = document.querySelector('.temp-unit');

    const feelsLike = document.querySelector('.feels-like');
    const flUnit = document.querySelector('.fl-unit');
    

if(tempUnit == '°C'){
    toFarenheit();
    temperature.textContent = temp;
    feelsLike.textContent = `Feels like ${flTemp}`;

    tempUnit = '°F';
    temperatureUnit.textContent = tempUnit;
    flUnit.textContent = tempUnit;
} else {
    toCelsius();
    temperature.textContent = temp;
    feelsLike.textContent = `Feels like ${flTemp}`;

    tempUnit = '°C';
    temperatureUnit.textContent = tempUnit;
    flUnit.textContent = tempUnit;
}
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export async function show(){

    let city = $city.value;

    const data = await weatherData();

    const date = document.querySelector('.date');
    date.textContent = today();

    const cityName = document.querySelector('.city');
    
    cityName.textContent = city;

    const temperature = document.querySelector('.temperatureNumber');
    temperature.textContent = Math.round(data.temperature);
    temp = data.temperature;

    const temperatureUnit = document.querySelector('.temp-unit');
    temperatureUnit.textContent = tempUnit;

    const feelsLike = document.querySelector('.feels-like');
    feelsLike.textContent = `Feels like ${data.feelsLike}`;
    flTemp = data.feelsLike;

    const flUnit = document.querySelector('.fl-unit');
    flUnit.textContent = tempUnit;

    const icon = document.getElementById('icon');
    icon.src = `../src/icons/${data.icon}.png`;

    const description = document.getElementById('description');
    description.textContent = capitalizeFirstLetter(data.currentWeatherDescription);

    const pressure = document.getElementById('pressure');
    pressure.textContent = "Pressure";

    const pressureNumber = document.getElementById('pressureNumber');
   pressureNumber.textContent = `${data.pressure}hPa`;

   const humidity = document.getElementById('humidity');
    humidity.textContent = "Humidity";

    const humidityNumber = document.getElementById('humidityNumber');
   humidityNumber.textContent = `${data.humidity}%`;

   const wind = document.getElementById('windspeed');
   wind.textContent = "Wind";

    const windNumber = document.getElementById('windNumber');
   windNumber.textContent = `${data.windSpeed}km/h`;
    
}

function toCelsius(){
    temp = Math.round((temp - 32) * (5/9));
    flTemp = Math.round((flTemp - 32) * (5/9));
}

function toFarenheit(){
    temp = Math.round((temp * (9/5)) + 32);
    flTemp = Math.round((flTemp * (9/5)) + 32);
}
