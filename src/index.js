import './style.css';
import {show} from './display'
import { toggleTemperature } from './display';
import { showLagosData } from './lagos';
import {showLondonData} from './london';
import { showNewYorkData } from './newyork';



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

showLagosData();
showLondonData();
showNewYorkData();
