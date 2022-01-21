import "./style.css";
import { show, toggleTemperature } from "./display";
import { showLagosData } from "./lagos";
import { showLondonData } from "./london";
import { showNewYorkData } from "./newyork";
import {
  displayDayOneForecast,
  displayDayTwoForecast,
  displayDayThreeForecast,
  displayDayFourForecast,
} from "./displayForecast";

document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", () => {
    show();
    displayDayOneForecast();
    displayDayTwoForecast();
    displayDayThreeForecast();
    displayDayFourForecast();
  });

  const input = document.getElementById("cityName");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      searchBtn.click();
    }
  });

  const temperatureUnit = document.querySelector(".temp-unit");
  temperatureUnit.addEventListener("click", toggleTemperature);

  showLagosData();
  showLondonData();
  showNewYorkData();
});

document.getElementById("bobobo").addEventListener("click", () => {
  displayDayOneForecast();
  displayDayTwoForecast();
  displayDayThreeForecast();
  displayDayFourForecast();
});
