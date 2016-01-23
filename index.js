var convert = require('./src/conversion');
var fs = require('fs');
var gm = require('gm');

var jpeg = require('jpeg-js');

function string2jpg( string, callback ){
    var hex = convert.string2hex(string);

    console.log('string:', string);
    console.log('hex:', hex);

    var width = 200;
    var height = 200;

    var frameData = new Buffer(width * height * 4);

    var i = 0;
    while (i < frameData.length) {
        frameData[i++] = (
            '0x' + (hex.charAt(i) || 0) + (hex.charAt(i + 1) || 0)
        ); // red
        frameData[i++] = (
            '0x' + (hex.charAt(i + 2) || 0) + (hex.charAt(i + 3) || 0)
        ); // green
        frameData[i++] = (
            '0x' + (hex.charAt(i + 4) || 0) + (hex.charAt(i + 5) || 0)
        ); // blue
        frameData[i++] = '0xFF'; // alpha - ignored in JPEGs
    }

    var rawImageData = {
        data: frameData,
        width: width,
        height: height
    };

    return callback(null, jpeg.encode(rawImageData, 100));
}

function jpg2string( image, callback ){

}

module.exports = {
    string2jpg: string2jpg,
    jpg2string: jpg2string
};
