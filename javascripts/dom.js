"use strict";

let recentlyPlayed = [];

const setRecentlyPlayed = (_recentlyPlayed) => {
    recentlyPlayed = _recentlyPlayed; 
};


const showRecentlyPlayedOnPage = () => {
    let str = "";
    recentlyPlayed.forEach((item) =>{
        str += 
        `<div class="badge-card magictime tinDownIn col-md-3">
            <div class="image-container">
                <img src="${item.track.album.image[1]}">
            </div>
        <div class="text-container">
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