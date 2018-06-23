'use strict';
const natural = require('natural');

module.exports = function(options, array) {
    return array.reduce((acc, el) => {
        acc[el] = acc[el] || 0;
        acc[el]++;
        return acc;
    }, {});
}
