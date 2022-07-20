function bin2hex(bin) {
  bin = unescape(encodeURIComponent(bin));
  var chr, i = 0, l = bin.length, out = '';
  for (; i < l; i++) {
    chr = bin.charCodeAt(i).toString(16);
    out += (chr.length % 2 === 0) ? chr : '0' + chr;
  }
  return out;
}
