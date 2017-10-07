"use strict";

const badges = require('./badges');

const createDomString = (badges) => {
	 var badgeString = '';
    for(var i=0; i<badges.length; i++){
        var newBadge = "";
        newBadge +=`<div class="badgeBox"  id="badgeBox-${i}">`;
        newBadge +=`<div class="badgeName">${badges[i].name}</div>`;
        newBadge +=`<img class="BadgeImage" src="${badges[i].icon_url}">`;
        newBadge += `</div>`;
        badgeString += newBadge;
    }
    printToDom(badgeString);
};

const printToDom = (strang) => {
	$('#badgeHolder').html(strang);
};

module.exports = {createDomString};