// ==UserScript==
// @name         Bustimes Show Vehicles in Timetables
// @namespace    https://github.com/h-exx/user-scripts
// @version      1.1
// @description  Adds the Vehicle tab to Timetables
// @author       h-exx
// @match        http*://bustimes.org/services/*
// @icon         https://bustimes.org/favicon.ico
// @updateURL   https://raw.githubusercontent.com/h-exx/user-scripts/main/bustimes-addvehiclestab.user.js
// @downloadURL https://raw.githubusercontent.com/h-exx/user-scripts/main/bustimes-addvehiclestab.user.js
// @grant        none
// @run-at      document-idle
// ==/UserScript==


let url = window.location.href;

if (url.endsWith('/vehicles')) {
    document.getElementsByClassName('tabs')[0].innerHTML += `<li id="map-link"><a href="${url.split('/vehicles')[0]}#map">Map</a></li>`
} else {
    document.getElementsByClassName('tabs')[0].innerHTML += `<li id="map-link"><a href="${url + '/vehicles'}">Vehicles</a></li>`
}
