"use strict";

const api = require("./api"); 
const dom = require("./dom");

$(document).ready(() => {
    if (sessionStorage.getItem("spotifyAccessToken")) {
        let accessToken = sessionStorage.getItem("spotifyAccessToken");
        api.setSpotifyAccessToken(accessToken);
    }
    else {
        let hash = location.hash; 
        if (hash) {
          let accessToken = api.findAccessToken(hash);
          if (accessToken.length > 10) {
            api.setSpotifyAccessToken(accessToken);
            location.hash = ''; 
          }      
        }
    }
});


$('#NavToSpotifyLoginBtn').click(function(e) {    
        window.location.href = $(e.currentTarget).data().href;
    });


$(`#showRecentlyPlayedBtn`).click(() => {
    api.getRecentlyPlayed(50); 
});


module.exports = {};

