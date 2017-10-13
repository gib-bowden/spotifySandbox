"use strict";

let Spotify = require('../lib/bower_components/spotify-web-api-js/src/spotify-web-api.js');
let spotifyApi = new Spotify();
const dom = require('./dom');


const findAccessToken = (str) => {
  let accessToken = str.match(/\#(?:access_token)\=([\S\s]*?)\&/)[1];
  return accessToken; 
};

const setSpotifyAccessToken = (tokenStr) => {
    spotifyApi.setAccessToken(tokenStr); 
};


const getRecentlyPlayed = () => {
  spotifyApi.getMyRecentlyPlayedTracks((err, data) => {
    if (err) console.log(err);
    else {
        dom.setRecentlyPlayed(data.items); 
        dom.showRecentlyPlayedOnPage(); 
    } 
  }); 
}; 

module.exports = {
    findAccessToken,
    setSpotifyAccessToken,
    getRecentlyPlayed
};