"use strict";

const events = require('./events.js');

let badges = [];

$.get('../db/badges.json').done((data) =>{
	console.log(data);
	badges = data.badges;
	events.createDomString(badges);
}).fail((error) =>{
	console.log(error);
});

module.exports = {};