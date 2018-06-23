'use strict';
const process = require('../../process');
const fs = require('fs');

module.exports = function(options, text) {

    const _2prob = exec([
        process.gram.bind(this, {n: 2}),
        process.count.bind(this, {}),
    ], text);

    const _1prob = exec([
        process.gram.bind(this, {n: 1}),
        process.count.bind(this, {}),
    ], text);

    // console.log(_2prob);
    // console.log(_1prob);

    let probs = Object.keys(_2prob).reduce((acc, _2gram) => {
        let _1grams = _2gram.split(',')
        acc[_2gram] = _2prob[_2gram] / (_1prob[_1grams[0]] + _1prob[_1grams[1]])
        return acc;
    }, {});


    let printMe = Object.keys(probs).map((el) => { return {key: el, prob: probs[el]}}).sort((a, b) => {
        return a.prob > b.prob ? -1 : a.prob < b.prob ? 1 : 0;
    });
    console.log(JSON.stringify(printMe, null, 4));
    fs.writeFile('./output.json', JSON.stringify(printMe, null, 4))
}



function exec(fns, arg) {
    return fns.reduce((arg, fn) => fn(arg), arg);
}
