"use strict"; 

let Spotify = require('../lib/bower_components/spotify-web-api-js/src/spotify-web-api.js');

let spotifyApi = new Spotify();


$(document).ready(() => {
  let hash = location.hash; 
  if (hash) {
    let accessToken = findAccessToken(hash);
    console.log(accessToken);
    spotifyApi.setAccessToken(accessToken);
    location.hash = ''; 
  }
});


const findAccessToken = (str) => {
  let accessToken = str.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
  return accessToken; 
};

$('#NavToSpotifyLoginBtn').click(function(e) {

    window.location.href = $(e.currentTarget).data().href;
});


// get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });

const getRecentlyPlayed = () => {
  spotifyApi.getMyRecentlyPlayedTracks((err, data) => {
    if (err) console.log(err);
    else console.log('My recently played', data); 
  }); 
}; 

$(`#showButton`).click(() => {
  getRecentlyPlayed(); 
});

  
