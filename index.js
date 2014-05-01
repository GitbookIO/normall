var latenize = require('latenize');

// Remove all non-ascii chars
function ascii(str) {
    return str.replace(/[^\x00-\x7F]/g, '');
}

// Basic normalization = latenize + ascii
// Common and basic
function base(str) {
    return ascii(latenize(str)).trim();
}

// Normalize str to be used as a filename
// Strip illegal chars found in http://en.wikipedia.org/wiki/Filename#Reserved%5Fcharacters%5Fand%5Fwords
function filename(str) {
    return base(str)
    .replace(/[\/\\\?\%\*\:\;\|\"\'\\<\\>\#\$\(\)\!\.\@]/g, '')
    .trim()
    .replace(/ /g, '_');
}

// Normalize name
function name(str) {
    return base(str);
}

// Exports
module.exports = base;
module.exports.ascii = ascii;
module.exports.name = name  ;
module.exports.filename = filename;
