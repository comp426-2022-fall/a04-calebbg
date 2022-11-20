#!/usr/bin/env node

const minimist = require('minimist');
const roll = require('./lib/roll.js');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const args = minimist(process.argv.slice(2));

const port = args.port || 5000;

app.get('/', (req, res, next) => {
    res.send("Hello,world");
})

app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

//console.log(roll.roll(6,3,3));