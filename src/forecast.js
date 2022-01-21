import { weatherData } from "./weather";

export async function dayOne() {

const cityData = await weatherData();

  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  const icon = await data.daily[0].weather[0].icon;
  const tempFrom = Math.round(await data.daily[0].temp.morn);
  const tempTo = Math.round(await data.daily[0].temp.night);
  const weather = await data.daily[0].weather[0].description;
  const wind = Math.round(await data.daily[0].wind_speed);
  
  return {icon, tempFrom, tempTo, weather, wind}
}

export async function dayTwo() {

    const cityData = await weatherData();

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    const icon = await data.daily[1].weather[0].icon;
    const tempFrom = Math.round(await data.daily[1].temp.morn);
    const tempTo = Math.round(await data.daily[1].temp.night);
    const weather = await data.daily[1].weather[0].description;
    const wind = Math.round(await data.daily[1].wind_speed);
    
    return {icon, tempFrom, tempTo, weather, wind}
  }

  export async function dayThree() {

    const cityData = await weatherData();

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    const icon = await data.daily[2].weather[0].icon;
    const tempFrom = Math.round(await data.daily[2].temp.morn);
    const tempTo = Math.round(await data.daily[2].temp.night);
    const weather = await data.daily[2].weather[0].description;
    const wind = Math.round(await data.daily[2].wind_speed);
    
    return {icon, tempFrom, tempTo, weather, wind}
  }

  export async function dayFour() {

    const cityData = await weatherData();

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    const icon = await data.daily[3].weather[0].icon;
    const tempFrom = Math.round(await data.daily[3].temp.min);
    const tempTo = Math.round(await data.daily[3].temp.max);
    const weather = await data.daily[3].weather[0].description;
    const wind = Math.round(await data.daily[3].wind_speed);
    
    return {icon, tempFrom, tempTo, weather, wind}
  }