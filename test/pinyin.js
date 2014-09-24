var assert = require('assert');

var pinyin = require('../').pinyin;


describe('Pinyin normalization', function() {
    it('should leave english untouched', function() {
        assert.equal(pinyin('aaron omullan'), 'aaron omullan');
    });

    it('should not touch accents', function() {
        assert.equal(pinyin('Samy Pessé'), 'Samy Pessé');

        assert.equal(pinyin('Niña'), 'Niña');
    });

    it('should handle chinese names', function() {

    });
});
