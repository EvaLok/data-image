function string2hex( string ){
    var b = new Buffer(string);

    return b.toString('hex');
}

function hex2data( hex, dataType ){
    var dt = dataType || 'utf8';

    var b = new Buffer(hex, 'hex');
    return b.toString(dt);
}

module.exports = {
    string2hex: string2hex,
    hex2data: hex2data
};
