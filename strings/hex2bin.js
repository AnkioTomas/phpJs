function hex2bin(hex) {
    var length = hex.length / 2;
    var result = new Uint8Array(length);
    for (var i = 0; i < length; ++i) {
        result[i] = parseInt(hex.slice(i * 2, i * 2 + 2), 16);
    }
    return result;
}
