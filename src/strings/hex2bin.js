function hex2bin(hex) {
    return decodeURIComponent(hex.replace(/../g, '%$&'));
}
