#!/usr/bin/env node

const minimist = require('minimist');
const roll = require('./lib/roll.js');

//const args = minimist(process.argv.slice(2));
console.log(roll.roll(6,3,3));