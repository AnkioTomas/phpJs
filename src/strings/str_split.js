function str_split(string, split_length) {
  //  discuss at: http://phpjs.org/functions/str_split/
  // original by: Martijn Wieringa
  // improved by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Onno Marsman
  //  revised by: Theriault
  //  revised by: Rafał Kukawski (http://blog.kukawski.pl/)
  //    input by: Bjorn Roesbeke (http://www.bjornroesbeke.be/)
  //   example 1: str_split('Hello Friend', 3);
  //   returns 1: ['Hel', 'lo ', 'Fri', 'end']

  split_length = split_length || 1;
  if (string === null || split_length < 1) {
    return false;
  }
  string += '';
  var chunks = [],
    pos = 0,
    len = string.length;
  while (pos < len) {
    chunks.push(string.slice(pos, pos += split_length));
  }

  return chunks;
}