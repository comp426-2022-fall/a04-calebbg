#!/usr/bin/env node

const minimist = require('minimist');
const roll = require('./lib/roll.js');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const args = minimist(process.argv.slice(2));

const port = args.port || 5000;

app.get('/app/', (req, res, next) => {
    res.status(200);
    res.send("Status code : 200 OK");
});

app.get('/app/roll/', (req, res, next) => {
    res.status(200).json(roll.roll(6,2,1)).end();
});

app.get('/app/roll/:sides', (req, res, next) => {
    res.status(200).json(roll.roll(req.params.sides,2,1)).end();
});

app.get('/app/roll/:sides/:dice', (req, res, next) => {
    res.status(200).json(roll.roll(req.params.sides,req.params.dice,1)).end();
});

app.get('/app/roll/:sides/:dice/:rolls', (req, res, next) => {
    res.status(200).json(roll.roll(req.params.sides,req.params.dice,req.params.rolls)).end();
});

// app.get('*', (req, res, next) => {
//     res.status(404);
// });

app.listen(port, () => {
    // console.log("Server is listening on port " + port);
});