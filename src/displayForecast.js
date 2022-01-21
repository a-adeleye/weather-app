import { dayOne, dayTwo, dayThree, dayFour } from "./forecast";

export async function displayDayOneForecast() {
  const data = await dayOne();

  let dateOptions = { month: "short", day: "numeric" };
  let dayOptions = { weekday: "long" };

  let todayDate = new Date();

  let date = new Date().toLocaleDateString("en-US", dateOptions);

  let day = todayDate.setDate(todayDate.getDate() + 1);
  day = new Date(day).toLocaleDateString("en-US", dayOptions);
  console.log(day);

  const dayElement = document.getElementById("dayOneDay");
  dayElement.textContent = day;

  const dateElement = document.getElementById("dayOneDate");
  dateElement.textContent = date;

  const icon = document.getElementById("dayOneIcon");
  icon.src = `../src/icons/${data.icon}.png`;

  const temp = document.getElementById("dayOneTemp");
  temp.textContent = `${data.tempFrom}°C to ${data.tempTo}°C`;

  const weather = document.getElementById("dayOneWeather");
  weather.textContent = data.weather.toUpperCase();

  const wind = document.getElementById("dayOneWind");
  wind.textContent = `${data.wind}km/h`;
}
