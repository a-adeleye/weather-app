import './style.css';
import { weatherData } from './weather';

const weather = await weatherData();

console.log(weather);