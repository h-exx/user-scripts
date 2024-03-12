// ==UserScript==
// @name         Bustimes Show Vehicles in Timetables
// @namespace    https://github.com/h-exx/user-scripts
// @version      1.0
// @description  Adds the Vehicle tab to Timetables
// @author       h-exx
// @match        http*://bustimes.org/services/*
// @icon         https://bustimes.org/favicon.ico
// @updateURL   https://raw.githubusercontent.com/h-exx/user-scripts/main/steam-autoageverifier.user.js
// @downloadURL https://raw.githubusercontent.com/h-exx/user-scripts/main/steam-autoageverifier.user.js
// @grant        none
// @run-at      document-idle
// ==/UserScript==


let url = window.location.href;

if (url.endsWith('/vehicles')) {
    console.log("nah");
} else {
    document.getElementsByClassName('tabs')[0].append(`<li id="map-link"><a href="${url + '/vehicles'}">Vehicles</a></li>`);
}