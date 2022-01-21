import { dayOne, dayTwo, dayThree, dayFour } from "./forecast";

export async function displayDayOneForecast() {
  try{

  
  const data = await dayOne();

  let dateOptions = { month: "short", day: "numeric" };
  let dayOptions = { weekday: "long" };

  let todayDate = new Date();

  let day = todayDate.setDate(todayDate.getDate() + 1);
  let date = new Date(day).toLocaleDateString("en-US", dateOptions);
  day = new Date(day).toLocaleDateString("en-US", dayOptions);

  const dayElement = document.getElementById("dayOneDay");
  dayElement.textContent = day;

  const dateElement = document.getElementById("dayOneDate");
  dateElement.textContent = date;

  const icon = document.getElementById("dayOneIcon");
  icon.src = `./icons/${data.icon}.png`;

  const temp = document.getElementById("dayOneTemp");
  temp.textContent = `${data.tempFrom}°C to ${data.tempTo}°C`;

  const weather = document.getElementById("dayOneWeather");
  weather.textContent = data.weather.toUpperCase();

  const wind = document.getElementById("dayOneWind");
  wind.textContent = `${data.wind}km/h`;
}
catch(error){
  
}
}

export async function displayDayTwoForecast() {

  try{

  
  const data = await dayTwo();

  let dateOptions = { month: "short", day: "numeric" };
  let dayOptions = { weekday: "long" };

  let todayDate = new Date();

  let day = todayDate.setDate(todayDate.getDate() + 2);
  let date = new Date(day).toLocaleDateString("en-US", dateOptions);
  day = new Date(day).toLocaleDateString("en-US", dayOptions);

  const dayElement = document.getElementById("dayTwoDay");
  dayElement.textContent = day;

  const dateElement = document.getElementById("dayTwoDate");
  dateElement.textContent = date;

  const icon = document.getElementById("dayTwoIcon");
  icon.src = `./icons/${data.icon}.png`;

  const temp = document.getElementById("dayTwoTemp");
  temp.textContent = `${data.tempFrom}°C to ${data.tempTo}°C`;

  const weather = document.getElementById("dayTwoWeather");
  weather.textContent = data.weather.toUpperCase();

  const wind = document.getElementById("dayTwoWind");
  wind.textContent = `${data.wind}km/h`;
  }
  catch(error){
    
  }
}

export async function displayDayThreeForecast() {
  try{

  const data = await dayThree();

  let dateOptions = { month: "short", day: "numeric" };
  let dayOptions = { weekday: "long" };

  let todayDate = new Date();

  let day = todayDate.setDate(todayDate.getDate() + 3);
  let date = new Date(day).toLocaleDateString("en-US", dateOptions);
  day = new Date(day).toLocaleDateString("en-US", dayOptions);

  const dayElement = document.getElementById("dayThreeDay");
  dayElement.textContent = day;

  const dateElement = document.getElementById("dayThreeDate");
  dateElement.textContent = date;

  const icon = document.getElementById("dayThreeIcon");
  icon.src = `./icons/${data.icon}.png`;

  const temp = document.getElementById("dayThreeTemp");
  temp.textContent = `${data.tempFrom}°C to ${data.tempTo}°C`;

  const weather = document.getElementById("dayThreeWeather");
  weather.textContent = data.weather.toUpperCase();

  const wind = document.getElementById("dayThreeWind");
  wind.textContent = `${data.wind}km/h`;
  }
  catch(error){
    
  }
}

export async function displayDayFourForecast() {
  try{


  const data = await dayFour();

  let dateOptions = { month: "short", day: "numeric" };
  let dayOptions = { weekday: "long" };

  let todayDate = new Date();

  let day = todayDate.setDate(todayDate.getDate() + 4);
  let date = new Date(day).toLocaleDateString("en-US", dateOptions);
  day = new Date(day).toLocaleDateString("en-US", dayOptions);

  const dayElement = document.getElementById("dayFourDay");
  dayElement.textContent = day;

  const dateElement = document.getElementById("dayFourDate");
  dateElement.textContent = date;

  const icon = document.getElementById("dayFourIcon");
  icon.src = `./icons/${data.icon}.png`;

  const temp = document.getElementById("dayFourTemp");
  temp.textContent = `${data.tempFrom}°C to ${data.tempTo}°C`;

  const weather = document.getElementById("dayFourWeather");
  weather.textContent = data.weather.toUpperCase();

  const wind = document.getElementById("dayFourWind");
  wind.textContent = `${data.wind}km/h`;
  }
  catch(error){
    
  }
}
