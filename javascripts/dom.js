"use strict";

let recentlyPlayed = [];

const setRecentlyPlayed = (_recentlyPlayed) => {
    recentlyPlayed = _recentlyPlayed; 
};

//
const showRecentlyPlayedOnPage = () => {
    console.log('recently played function data', recentlyPlayed); 
    let str = "";
    recentlyPlayed.forEach((item) =>{
        str += 
        `<div class="badge-card magictime tinDownIn col-md-3">
            <div class="image-container">
                <img src="${item.track.album.images[1].url}">
            </div>
        <div class="text-container">
            <p>${item.track.artists[0].name}</p>
            <p>${item.track.name}</p>
        </div>
        </div>`;
    });
    printToDom(str); 
};

const printToDom = (str) => {
    $('#recentlyPlayedHolder').html(str);
};


module.exports = {
    setRecentlyPlayed,
    showRecentlyPlayedOnPage
};