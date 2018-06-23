'use strict';
const config = require('./config');
const process = require('./process');
const analyze = require('./analyze');

const dataset = require(config.inputFilepath);
// console.log(dataset);

const text = dataset.reduce((acc, song) => {
    return acc + song.lyrics;
}, '');

// console.log(process.gram({n: 2}, text));

// const fns = [
//     process.gram.bind(this, {n: 2}),
//     process.count.bind(this, {}),
// ];
//
//
// console.log(fns.reduce((arg, fn) => fn(arg), text));

console.log(analyze.gramProb({}, text));
