import './style.css';
import {show} from './display'
// import { tempUnit } from './display';
import { toggleTemperature } from './display';


const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',show);

var input = document.getElementById("cityName");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        searchBtn.click();
    }
});

const temperatureUnit = document.querySelector('.temp-unit');
temperatureUnit.addEventListener('click',toggleTemperature);




//show();

//const weather = await weatherData();

//console.log(weather); */

