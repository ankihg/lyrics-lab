'use strict';
const natural = require('natural');

module.exports = function(options, text) {
    return natural.NGrams.ngrams(text, options.n);
}
