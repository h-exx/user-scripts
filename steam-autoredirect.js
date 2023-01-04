// ==UserScript==
// @name        Steam Auto Redirect
// @description Auto Redirects Steam pages to the Steam official launcher
// @namespace   https://github.com/h-exx/user-scripts
// @match       http*://steamcommunity.com/*
// @match       http*://*steampowered.com/*
// @updateURL   https://raw.githubusercontent.com/h-exx/user-scripts/main/steam-autoredirect.js
// @downloadURL https://raw.githubusercontent.com/h-exx/user-scripts/main/steam-autoredirect.js
// @grant       none
// @version     1.1
// @run-at      document-idle
// @author      h-exx
// @description 1/4/2023, 6:22:10 PM
// ==/UserScript==

const settings = {
  askEveryTime: true
}
function redir(url) {
  let userAns
  if (settings.askEveryTime == true) {
    userAns = confirm("Redirect to Steam client?");
  } else userAns = true;
  if (userAns == false) return;
  window.location.replace(url);
}


let url = window.location.href.split('/').splice(2);
let params = new URLSearchParams(window.location.search);

if (url[0].includes('steamcommunity')) {
  switch(url[1]) {
    case 'sharedfiles':
      if (params.has('id')) {
        redir(`steam://url/CommunityFilePage/` + params.get('id'));
        break;
      }
    case 'workshop':
      if (params.has('id')) {
        redir(`steam://url/CommunityFilePage/` + params.get('id'));
        break;
      }
    default:
      console.log('no links supported on steamcommunity');
  }
}

if (url[0].includes('steampowered')) {
  switch(url[1]) {
    case 'app':
      redir('steam://store/' + url[2]);
      break;
    default:
      console.log('no links supported on steamcommunity');
  }
}

