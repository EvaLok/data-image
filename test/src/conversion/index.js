var sut = require('../../../src/conversion');
var assert = require('assert');


describe('conversion', function(){
    var tests = [
        {
            string: 'this is a test 123!',
            hex: '74686973206973206120746573742031323321'
        },
        {
            string: 'hello world',
            hex: '68656c6c6f20776f726c64'
        },
        {
            string: '不是英文',
            hex: 'e4b88de698afe88bb1e69687'
        }
    ];

    describe('string2hex', function(){
        it('should convert a string to its hex value', function(){
            tests.forEach(function(test){
                assert.equal(test.hex, sut.string2hex(test.string));
            });
        });
    });

    describe('hex2data', function(){
        it('should convert a hex string to its original value', function(){
            tests.forEach(function(test){
                assert.equal(test.string, sut.hex2data(test.hex));
            });
        });
    });
});
