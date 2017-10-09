"use strict"; 

let Spotify = require('../lib/bower_components/spotify-web-api-js/src/spotify-web-api.js');

let spotifyApi = new Spotify();



spotifyApi.setAccessToken('BQD_S9qNpRHQZK8t2s2TUrRrX6WiLgknf9q4YomnTE1FH8xOMvcbGjizhuSbUYA7N8ngs1lQ4ayXmVNY1vVMHbKyTq25Sqzd34SUVzNhc-IBd8nr5snrTmcNnEmj_zvLajOh0ldaOaxcorsvldrvnovj16IQlOdsbs0');

$('#NavToSpotifyLoginBtn').click(function(e) {
    e.preventDefault(); e.stopPropagation();
    window.location.href = $(e.currentTarget).data().href;
});


// get Elvis' albums, passing a callback. When a callback is passed, no Promise is returned
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });

  spotifyApi.getMyRecentlyPlayedTracks((err, data) => {
    if (err) console.log(err);
    else console.log('My recently played', data); 
  }); 
  
