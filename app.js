(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(81),a=n.n(r),o=n(645),i=n.n(o),c=n(667),d=n.n(c),s=new URL(n(912),n.b),l=i()(a());l.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap);"]);var u=d()(s);l.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n}\r\n\r\nhtml {\r\n  background: rgb(15, 14, 44);\r\n  background-image: url("+u+');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  font-family: sans-serif;\r\n  color: white;\r\n}\r\n\r\n.dashboard {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n  max-width: 1000px;\r\n  height: 95vh;\r\n  max-height: 600px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #f6faff;\r\n  border-radius: 50px;\r\n  padding: 20px;\r\n}\r\n\r\n.left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: rgb(63, 94, 251);\r\n  background: linear-gradient(\r\n    319deg,\r\n    rgba(63, 94, 251, 1) 0%,\r\n    rgba(252, 70, 107, 1) 100%\r\n  );\r\n  width: 25%;\r\n  min-width: 250px;\r\n  height: 100%;\r\n  border-radius: 30px;\r\n}\r\n\r\n.searchbox {\r\n  display: flex;\r\n  width: 70%;\r\n  min-width: 150px;\r\n  height: 30px;\r\n  background: none;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ffffff;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  border-top-right-radius: 8px;\r\n  border-top-left-radius: 8px;\r\n}\r\n\r\n.searchbox > i,\r\ninput {\r\n  font-size: 0.6em;\r\n}\r\n\r\n.searchbox > i {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type="text"] {\r\n  background: none;\r\n  border: none;\r\n  width: 100%;\r\n  outline: none;\r\n  color: inherit;\r\n  padding-right: 5px;\r\n}\r\n\r\n.date {\r\n  color: white;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.city {\r\n  color: white;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.temperature {\r\n  text-align: center;\r\n}\r\n\r\n.temperatureNumber {\r\n  font-size: 4rem;\r\n  color: white;\r\n  font-weight: bolder;\r\n}\r\n\r\n.temp-unit {\r\n  position: absolute;\r\n  color: #ffd059;\r\n  font-size: 1.5rem;\r\n  margin-left: -10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.feels-like {\r\n  font-size: 0.8rem;\r\n  color: white;\r\n}\r\n\r\n.fl-unit {\r\n  position: absolute;\r\n  color: #ffd059;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.wdescription {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.wdescription p {\r\n  font-size: 0.8em;\r\n}\r\n\r\nimg {\r\n  height: 100px;\r\n  width: auto;\r\n}\r\n\r\n#tiles {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: rgb(255, 255, 255);\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tile {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 32%;\r\n  gap: 5px;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.tile > span {\r\n  font-size: 0.8em;\r\n}\r\n\r\n.right {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.toprow {\r\n  height: 80%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.col {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  color: black;\r\n}\r\n\r\n.bottomrow {\r\n  height: 30%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 10px;\r\n  margin-left: 5px;\r\n}\r\n\r\n.box {\r\n  width: 100%;\r\n  height: 90%;\r\n  background: blue;\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n#boxOne {\r\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\r\n}\r\n\r\n#boxTwo {\r\n  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);\r\n}\r\n\r\n#boxThree {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #b8cbb8 0%,\r\n    #b8cbb8 0%,\r\n    #b465da 0%,\r\n    #cf6cc9 33%,\r\n    #ee609c 66%,\r\n    #ee609c 100%\r\n  );\r\n}\r\n\r\n.tp {\r\n  text-align: center;\r\n}\r\n\r\n.dt {\r\n  font-size: 0.8em;\r\n}\r\n\r\n.dsc {\r\n  font-size: 0.7em;\r\n  font-weight: bold;\r\n}\r\n\r\n.wind {\r\n  font-size: 0.8em;\r\n}\r\n\r\nsup {\r\n  font-size: 0.6em;\r\n}\r\n\r\n.text {\r\n  font-size: 1em;\r\n  text-align: right;\r\n}\r\n\r\n.text .temp {\r\n  font-size: 0.9em;\r\n  margin-top: 5px;\r\n}\r\n\r\n.forecastTemp {\r\n  font-size: 0.8em;\r\n  word-spacing: 0.3em;\r\n}\r\n\r\n.error {\r\n  font-size: 0.8em;\r\n  color: yellow;\r\n}\r\n\r\n@media only screen and (max-width: 1100px) {\r\n  .dashboard {\r\n    width: 95%;\r\n  }\r\n\r\n  img {\r\n    height: 80px;\r\n    width: auto;\r\n  }\r\n\r\n  html {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 839px) {\r\n  .right {\r\n    display: none;\r\n  }\r\n\r\n  .dashboard {\r\n    width: max-content;\r\n  }\r\n}\r\n',""]);const m=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var d=e[c],s=r.base?d[0]+r.base:d[0],l=o[s]||0,u="".concat(s," ").concat(l);o[s]=l+1;var m=n(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var h=a(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=n(o[i]);t[c].references--}for(var d=r(e,a),s=0;s<o.length;s++){var l=n(o[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},912:(e,t,n)=>{e.exports=n.p+"53c7b5d5507b72e5b853.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),c=n(565),d=n.n(c),s=n(216),l=n.n(s),u=n(589),m=n.n(u),p=n(426),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const y=document.getElementById("cityName");let f="",g="";async function w(){try{let e=y.value;e||(e="Dubai",document.querySelector(".error").textContent="");const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=86798aad821bb8c4ee2887a3873485ff&units=metric`,{mode:"cors"}),n=await t.json(),r=await n.weather[0].description,a=await n.main.temp,o=await n.main.feels_like,i=await n.main.pressure,c=await n.main.humidity,d=await n.wind.speed,s=await n.weather[0].icon;return f=await n.coord.lon,g=await n.coord.lat,{currentWeatherDescription:r,temperature:a,feelsLike:o,pressure:i,humidity:c,windSpeed:d,icon:s,long:f,lat:g}}catch(e){document.querySelector(".error")}}const x=document.getElementById("cityName");let b="°C",C="",v="";const I=()=>{const e=document.querySelector(".temperatureNumber"),t=document.querySelector(".temp-unit"),n=document.querySelector(".feels-like"),r=document.querySelector(".fl-unit");"°C"==b?(C=Math.round(1.8*C+32),v=Math.round(1.8*v+32),e.textContent=C,n.textContent=`Feels like ${v}`,b="°F",t.textContent=b,r.textContent=b):(C=Math.round(5/9*(C-32)),v=Math.round(5/9*(v-32)),e.textContent=C,n.textContent=`Feels like ${v}`,b="°C",t.textContent=b,r.textContent=b)};function E(e){return e.charAt(0).toUpperCase()+e.slice(1)}async function D(){try{document.querySelector(".error").textContent="";let e=x.value;e||(e="Dubai");const t=await w();document.querySelector(".date").textContent=(new Date).toLocaleDateString("en-US",{weekday:"long",hour:"numeric",minute:"numeric"}),document.querySelector(".city").textContent=E(e),document.querySelector(".temperatureNumber").textContent=Math.round(t.temperature),C=t.temperature,document.querySelector(".temp-unit").textContent=b,document.querySelector(".feels-like").textContent=`Feels like ${t.feelsLike}`,v=t.feelsLike,document.querySelector(".fl-unit").textContent=b,document.getElementById("icon").src=`./icons/${t.icon}.png`,document.getElementById("description").textContent=E(t.currentWeatherDescription),document.getElementById("pressure").textContent="Pressure",document.getElementById("pressureNumber").textContent=`${t.pressure}hPa`,document.getElementById("humidity").textContent="Humidity",document.getElementById("humidityNumber").textContent=`${t.humidity}%`,document.getElementById("windspeed").textContent="Wind",document.getElementById("windNumber").textContent=`${t.windSpeed}km/h`}catch(e){document.querySelector(".error").textContent="City not found"}}async function S(){try{const e=await async function(){const e=await w();try{const t=`https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`,n=await fetch(t,{mode:"cors"}),r=await n.json(),a=await r.daily[0].weather[0].icon,o=Math.round(await r.daily[0].temp.morn);return{icon:a,tempFrom:o,tempTo:Math.round(await r.daily[0].temp.night),weather:await r.daily[0].weather[0].description,wind:Math.round(await r.daily[0].wind_speed)}}catch(e){}}();let t={month:"short",day:"numeric"},n={weekday:"long"},r=new Date,a=r.setDate(r.getDate()+1),o=new Date(a).toLocaleDateString("en-US",t);a=new Date(a).toLocaleDateString("en-US",n),document.getElementById("dayOneDay").textContent=a,document.getElementById("dayOneDate").textContent=o,document.getElementById("dayOneIcon").src=`./icons/${e.icon}.png`,document.getElementById("dayOneTemp").textContent=`${e.tempFrom}°C to ${e.tempTo}°C`,document.getElementById("dayOneWeather").textContent=e.weather.toUpperCase(),document.getElementById("dayOneWind").textContent=`${e.wind}km/h`}catch(e){}}async function k(){try{const e=await async function(){try{const e=await w(),t=`https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`,n=await fetch(t,{mode:"cors"}),r=await n.json(),a=await r.daily[1].weather[0].icon,o=Math.round(await r.daily[1].temp.morn);return{icon:a,tempFrom:o,tempTo:Math.round(await r.daily[1].temp.night),weather:await r.daily[1].weather[0].description,wind:Math.round(await r.daily[1].wind_speed)}}catch(e){}}();let t={month:"short",day:"numeric"},n={weekday:"long"},r=new Date,a=r.setDate(r.getDate()+2),o=new Date(a).toLocaleDateString("en-US",t);a=new Date(a).toLocaleDateString("en-US",n),document.getElementById("dayTwoDay").textContent=a,document.getElementById("dayTwoDate").textContent=o,document.getElementById("dayTwoIcon").src=`./icons/${e.icon}.png`,document.getElementById("dayTwoTemp").textContent=`${e.tempFrom}°C to ${e.tempTo}°C`,document.getElementById("dayTwoWeather").textContent=e.weather.toUpperCase(),document.getElementById("dayTwoWind").textContent=`${e.wind}km/h`}catch(e){}}async function B(){try{const e=await async function(){try{const e=await w(),t=`https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`,n=await fetch(t,{mode:"cors"}),r=await n.json(),a=await r.daily[2].weather[0].icon,o=Math.round(await r.daily[2].temp.morn);return{icon:a,tempFrom:o,tempTo:Math.round(await r.daily[2].temp.night),weather:await r.daily[2].weather[0].description,wind:Math.round(await r.daily[2].wind_speed)}}catch(e){}}();let t={month:"short",day:"numeric"},n={weekday:"long"},r=new Date,a=r.setDate(r.getDate()+3),o=new Date(a).toLocaleDateString("en-US",t);a=new Date(a).toLocaleDateString("en-US",n),document.getElementById("dayThreeDay").textContent=a,document.getElementById("dayThreeDate").textContent=o,document.getElementById("dayThreeIcon").src=`./icons/${e.icon}.png`,document.getElementById("dayThreeTemp").textContent=`${e.tempFrom}°C to ${e.tempTo}°C`,document.getElementById("dayThreeWeather").textContent=e.weather.toUpperCase(),document.getElementById("dayThreeWind").textContent=`${e.wind}km/h`}catch(e){}}async function T(){try{const e=await async function(){try{const e=await w(),t=`https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${e.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`,n=await fetch(t,{mode:"cors"}),r=await n.json(),a=await r.daily[3].weather[0].icon,o=Math.round(await r.daily[3].temp.min);return{icon:a,tempFrom:o,tempTo:Math.round(await r.daily[3].temp.max),weather:await r.daily[3].weather[0].description,wind:Math.round(await r.daily[3].wind_speed)}}catch(e){}}();let t={month:"short",day:"numeric"},n={weekday:"long"},r=new Date,a=r.setDate(r.getDate()+4),o=new Date(a).toLocaleDateString("en-US",t);a=new Date(a).toLocaleDateString("en-US",n),document.getElementById("dayFourDay").textContent=a,document.getElementById("dayFourDate").textContent=o,document.getElementById("dayFourIcon").src=`./icons/${e.icon}.png`,document.getElementById("dayFourTemp").textContent=`${e.tempFrom}°C to ${e.tempTo}°C`,document.getElementById("dayFourWeather").textContent=e.weather.toUpperCase(),document.getElementById("dayFourWind").textContent=`${e.wind}km/h`}catch(e){}}document.addEventListener("DOMContentLoaded",(()=>{try{D(),S(),k(),B(),T();const e=document.getElementById("searchBtn");e.addEventListener("click",(()=>{D(),S(),k(),B(),T()})),document.getElementById("cityName").addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),e.click())})),document.querySelector(".temp-unit").addEventListener("click",I),async function(){const e=await async function(){try{const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&APPID=86798aad821bb8c4ee2887a3873485ff"),t=await e.json();return{temperature:await t.main.temp,icon:await t.weather[0].icon}}catch(e){console.log(e)}}();document.getElementById("lagosIcon").src=`./icons/${e.icon}.png`,document.getElementById("lagosTemp").textContent=Math.floor(e.temperature)+"°C"}(),async function(){try{const e=await async function(){try{const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=86798aad821bb8c4ee2887a3873485ff"),t=await e.json();return{temperature:await t.main.temp,icon:await t.weather[0].icon}}catch(e){}}();document.getElementById("londonIcon").src=`./icons/${e.icon}.png`,document.getElementById("londonTemp").textContent=Math.floor(e.temperature)+"°C"}catch(e){}}(),async function(){const e=await async function(){try{const e=await fetch("https://api.openweathermap.org/data/2.5/weather?q=new%20york&units=metric&APPID=86798aad821bb8c4ee2887a3873485ff"),t=await e.json();return{temperature:await t.main.temp,icon:await t.weather[0].icon}}catch(e){}}();document.getElementById("newYorkIcon").src=`./icons/${e.icon}.png`,document.getElementById("newYorkTemp").textContent=Math.floor(e.temperature)+"°C"}()}catch(e){console.log("caught")}}))})()})();