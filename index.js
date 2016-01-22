var convert = require('./src/conversion');

var original = '不是英文';
console.log('original', original);

var hex = convert.string2hex(original);
console.log('hex', hex);

var copy = convert.hex2data(hex);
console.log('copy', copy);

