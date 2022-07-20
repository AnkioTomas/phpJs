function bin2hex(bin) {
  return Array.from(bin).map(function (x) {
    return x.toString(16).padStart(2, '0');
  }).join('');
}
