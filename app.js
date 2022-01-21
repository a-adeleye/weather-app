(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(81),o=r.n(t),i=r(645),a=r.n(i),c=r(667),s=r.n(c),d=new URL(r(912),r.b),l=a()(o());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700&display=swap);"]);var u=s()(d);l.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-size: 20px;\r\n  /* border: 1px solid red; */\r\n}\r\n\r\nhtml {\r\n  background: rgb(15, 14, 44);\r\n  background-image: url("+u+');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  font-family: sans-serif;\r\n  color: white;\r\n}\r\n\r\n.dashboard {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 80%;\r\n  max-width: 980px;\r\n  height: 95vh;\r\n  max-height: 600px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background: #f6faff;\r\n  border-radius: 50px;\r\n  padding: 20px;\r\n}\r\n\r\n.left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background: rgb(63, 94, 251);\r\n  background: linear-gradient(\r\n    319deg,\r\n    rgba(63, 94, 251, 1) 0%,\r\n    rgba(252, 70, 107, 1) 100%\r\n  );\r\n  width: 25%;\r\n  min-width: 250px;\r\n  height: 100%;\r\n  border-radius: 30px;\r\n}\r\n\r\n.searchbox {\r\n  display: flex;\r\n  width: 70%;\r\n  min-width: 150px;\r\n  height: 30px;\r\n  background: none;\r\n  align-items: center;\r\n  border-bottom: 1px solid #ffffff;\r\n  padding: 10px;\r\n  color: #ffffff;\r\n  border-top-right-radius: 8px;\r\n  border-top-left-radius: 8px;\r\n  /* margin: 0 auto 10px; */\r\n}\r\n\r\n.searchbox > i,\r\ninput {\r\n  font-size: 0.6em;\r\n}\r\n\r\n.searchbox > i {\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type="text"] {\r\n  background: none;\r\n  border: none;\r\n  width: 100%;\r\n  outline: none;\r\n  color: inherit;\r\n  padding-right: 5px;\r\n}\r\n\r\n.date {\r\n  color: white;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.city {\r\n  color: white;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.temperature {\r\n  /* margin-top: 10px; */\r\n  text-align: center;\r\n}\r\n\r\n.temperatureNumber {\r\n  font-size: 4rem;\r\n  color: white;\r\n  font-weight: bolder;\r\n}\r\n\r\n.temp-unit {\r\n  position: absolute;\r\n  color: #ffd059;\r\n  font-size: 1.5rem;\r\n  margin-left: -10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.feels-like {\r\n  font-size: 0.8rem;\r\n  color: white;\r\n}\r\n\r\n.fl-unit {\r\n  position: absolute;\r\n  color: #ffd059;\r\n  font-size: 0.6rem;\r\n}\r\n\r\n.wdescription {\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.wdescription p {\r\n  font-size: 0.8em;\r\n}\r\n\r\nimg {\r\n  height: 100px;\r\n  width: auto;\r\n}\r\n\r\n#tiles {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  color: rgb(255, 255, 255);\r\n  margin-top: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.tile {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 32%;\r\n  gap: 5px;\r\n  font-size: 0.8em;\r\n}\r\n\r\n.tile > span {\r\n  font-size: 0.8em;\r\n}\r\n\r\nlabel {\r\n  margin-top: 10px;\r\n  background: rgb(238, 174, 202);\r\n  background: radial-gradient(\r\n    circle,\r\n    rgba(238, 174, 202, 1) 0%,\r\n    rgba(148, 187, 233, 1) 100%\r\n  );\r\n  width: 48px;\r\n  height: 23px;\r\n  border-radius: 30px;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\nlabel::after {\r\n  content: "";\r\n  background: rgb(131, 58, 180);\r\n  background: linear-gradient(\r\n    90deg,\r\n    rgba(131, 58, 180, 1) 0%,\r\n    rgba(253, 29, 29, 1) 50%,\r\n    rgba(252, 176, 69, 1) 100%\r\n  );\r\n  color: #16bffd;\r\n  width: 20px;\r\n  height: 20px;\r\n  position: absolute;\r\n  border-radius: 50%;\r\n  margin-top: 0.1em;\r\n  margin-left: 0.2em;\r\n  transition: 0.4s;\r\n  font-size: 0.8em;\r\n  text-align: center;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n  display: none;\r\n}\r\n\r\ninput[type="checkbox"]:checked + label::after {\r\n  transform: translateX(100%);\r\n  color: #ffffff;\r\n}\r\n\r\n.right {\r\n  width: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.toprow {\r\n  height: 80%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n}\r\n\r\n.col {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  color: black;\r\n}\r\n\r\n.bottomrow {\r\n  height: 30%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  gap: 10px;\r\n}\r\n\r\n.box {\r\n  width: 100%;\r\n  height: 90%;\r\n  background: blue;\r\n  border-radius: 20px;\r\n  padding: 10px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n#boxOne {\r\n  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);\r\n}\r\n\r\n#boxTwo {\r\n  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);\r\n}\r\n\r\n#boxThree {\r\n  background-image: linear-gradient(\r\n    to right,\r\n    #b8cbb8 0%,\r\n    #b8cbb8 0%,\r\n    #b465da 0%,\r\n    #cf6cc9 33%,\r\n    #ee609c 66%,\r\n    #ee609c 100%\r\n  );\r\n}\r\n\r\n.tp {\r\n  text-align: center;\r\n}\r\n\r\n.dt {\r\n  font-size: 0.8em;\r\n}\r\n\r\n.dsc {\r\n  font-size: 0.7em;\r\n  font-weight: bold;\r\n}\r\n\r\n.wind {\r\n  font-size: 0.8em;\r\n}\r\n\r\nsup {\r\n  font-size: 0.6em;\r\n}\r\n\r\n.text {\r\n  font-size: 1em;\r\n  text-align: right;\r\n}\r\n\r\n.text .temp {\r\n  font-size: 0.9em;\r\n  margin-top: 5px;\r\n}\r\n\r\n.forecastTemp {\r\n  font-size: 0.8em;\r\n  word-spacing: 0.3em;\r\n}\r\n',""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=r(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},912:(n,e,r)=>{n.exports=r.p+"53c7b5d5507b72e5b853.jpg"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),u=r(589),p=r.n(u),m=r(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.getElementById("cityName");let h="",b="";async function y(){let n=g.value;const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${n}&APPID=86798aad821bb8c4ee2887a3873485ff&units=metric`),r=await e.json(),t=await r.weather[0].description,o=await r.main.temp,i=await r.main.feels_like,a=await r.main.pressure,c=await r.main.humidity,s=await r.wind.speed,d=await r.weather[0].icon;return h=await r.coord.lon,b=await r.coord.lat,console.log(h),console.log(b),{currentWeatherDescription:t,temperature:o,feelsLike:i,pressure:a,humidity:c,windSpeed:s,icon:d,long:h,lat:b}}const x=document.getElementById("cityName");let w="°C",v="",k="";const C=document.getElementById("searchBtn");C.addEventListener("click",(()=>{!async function(){let n=x.value;const e=await y();var r;document.querySelector(".date").textContent=(new Date).toLocaleDateString("en-US",{weekday:"long",hour:"numeric",minute:"numeric"}),document.querySelector(".city").textContent=n,document.querySelector(".temperatureNumber").textContent=Math.round(e.temperature),v=e.temperature,document.querySelector(".temp-unit").textContent=w,document.querySelector(".feels-like").textContent=`Feels like ${e.feelsLike}`,k=e.feelsLike,document.querySelector(".fl-unit").textContent=w,document.getElementById("icon").src=`../src/icons/${e.icon}.png`,document.getElementById("description").textContent=(r=e.currentWeatherDescription).charAt(0).toUpperCase()+r.slice(1),document.getElementById("pressure").textContent="Pressure",document.getElementById("pressureNumber").textContent=`${e.pressure}hPa`,document.getElementById("humidity").textContent="Humidity",document.getElementById("humidityNumber").textContent=`${e.humidity}%`,document.getElementById("windspeed").textContent="Wind",document.getElementById("windNumber").textContent=`${e.windSpeed}km/h`}()})),document.getElementById("cityName").addEventListener("keyup",(function(n){13===n.keyCode&&(n.preventDefault(),C.click())})),document.querySelector(".temp-unit").addEventListener("click",(()=>{const n=document.querySelector(".temperatureNumber"),e=document.querySelector(".temp-unit"),r=document.querySelector(".feels-like"),t=document.querySelector(".fl-unit");"°C"==w?(v=Math.round(1.8*v+32),k=Math.round(1.8*k+32),n.textContent=v,r.textContent=`Feels like ${k}`,w="°F",e.textContent=w,t.textContent=w):(v=Math.round(5/9*(v-32)),k=Math.round(5/9*(k-32)),n.textContent=v,r.textContent=`Feels like ${k}`,w="°C",e.textContent=w,t.textContent=w)})),document.getElementById("bobobo").addEventListener("click",(async function(){const n=await async function(){const n=await y(),e=`https://api.openweathermap.org/data/2.5/onecall?lat=${n.lat}&lon=${n.long}&appid=86798aad821bb8c4ee2887a3873485ff&units=metric`,r=await fetch(e),t=await r.json();return{icon:await t.daily[0].weather[0].icon,tempFrom:Math.round(await t.daily[0].temp.morn),tempTo:Math.round(await t.daily[0].temp.night),weather:await t.daily[0].weather[0].description,wind:Math.round(await t.daily[0].wind_speed)}}();let e=new Date,r=(new Date).toLocaleDateString("en-US",{month:"short",day:"numeric"}),t=e.setDate(e.getDate()+1);t=new Date(t).toLocaleDateString("en-US",{weekday:"long"}),console.log(t),document.getElementById("dayOneDay").textContent=t,document.getElementById("dayOneDate").textContent=r,document.getElementById("dayOneIcon").src=`../src/icons/${n.icon}.png`,document.getElementById("dayOneTemp").textContent=`${n.tempFrom}°C to ${n.tempTo}°C`,document.getElementById("dayOneWeather").textContent=n.weather.toUpperCase(),document.getElementById("dayOneWind").textContent=`${n.wind}km/h`}))})()})();