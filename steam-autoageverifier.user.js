// ==UserScript==
// @name         Steam Auto Age Verifier
// @namespace    https://github.com/h-exx/user-scripts
// @version      1.0
// @description  Skips Steams Auto Age Verification
// @author       h-exx
// @match        http*://store.steampowered.com/agecheck/*
// @icon         https://store.steampowered.com/favicon.ico
// @updateURL   https://raw.githubusercontent.com/h-exx/user-scripts/main/steam-autoageverifier.user.js
// @downloadURL https://raw.githubusercontent.com/h-exx/user-scripts/main/steam-autoageverifier.user.js
// @grant        none
// @run-at      document-idle
// ==/UserScript==

document.querySelector('h2').innerHTML = "Skipping..."
document.getElementById("ageDay").value = 5;
document.getElementById("ageMonth").value = "March";
document.getElementById("ageYear").value = 1995;
ViewProductPage();
