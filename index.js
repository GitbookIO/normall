var latenize = require('latenize');
var han = require('han');

// Convert chinese characters to pinyin
// characters are separated by spaces
function pinyin(str) {
    return correct(str, han.letter(str, ' '), ' ');
}

function similar(s1, s2) {
    return s1.toLowerCase() === s2.toLowerCase();
}

// Corrects potential errors due to bad word breaking (regexes) (this happens in "han")
function correct(str, out, sep) {
    return out.split('').reduce(function(accu, x, i) {
        var o = str.charAt(accu.length);
        return similar(o, x) ? accu + o : accu;
    }, '');
}

// Remove all non-ascii chars
function ascii(str) {
    return str.replace(/[^\x00-\x7F]/g, '');
}

// Basic normalization = latenize + ascii
// Common and basic
function base(str) {
    return ascii(latenize(pinyin(str))).trim();
}

// Normalize str to be used as a filename
// Strip illegal chars found in http://en.wikipedia.org/wiki/Filename#Reserved%5Fcharacters%5Fand%5Fwords
function filename(str) {
    return base(str)
    .replace(/[\/\\\?\%\*\:\;\|\"\'\\<\\>\#\$\(\)\!\.\@]/g, '')
    .trim()
    .replace(/ /g, '_')
    .toLowerCase();
}

// Normalize name
function username(str) {
    return base(str).replace(/\s+/g, '');
}

// Exports
module.exports = base;
module.exports.ascii = ascii;
module.exports.username = username;
module.exports.filename = filename;

module.exports.latenize = latenize;
module.exports.accents = latenize;
module.exports.pinyin = pinyin;
