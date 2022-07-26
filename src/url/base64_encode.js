function base64_encode(str) {
    //  discuss at: http://phpjs.org/functions/base64_encode/
    // original by: Tyler Akins (http://rumkin.com)
    // improved by: Bayron Guevara
    // improved by: Thunder.m
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Rafał Kukawski (http://kukawski.pl)
    // bugfixed by: Pellentesque Malesuada
    //   example 1: base64_encode('Kevin van Zonneveld');
    //   returns 1: 'S2V2aW4gdmFuIFpvbm5ldmVsZA=='
    var table = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
        'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', '0', '1', '2', '3',
        '4', '5', '6', '7', '8', '9', '+', '/'
    ];
    var UTF16ToUTF8 = function (str) {
        var res = [], len = str.length;
        for (var i = 0; i < len; i++) {
            var code = str.charCodeAt(i);
            if (code > 0x0000 && code <= 0x007F) {
                // 单字节，这里并不考虑0x0000，因为它是空字节
                // U+00000000 – U+0000007F 	0xxxxxxx
                res.push(str.charAt(i));
            } else if (code >= 0x0080 && code <= 0x07FF) {
                // 双字节
                // U+00000080 – U+000007FF 	110xxxxx 10xxxxxx
                // 110xxxxx
                var byte1 = 0xC0 | ((code >> 6) & 0x1F);
                // 10xxxxxx
                var byte2 = 0x80 | (code & 0x3F);
                res.push(
                    String.fromCharCode(byte1),
                    String.fromCharCode(byte2)
                );
            } else if (code >= 0x0800 && code <= 0xFFFF) {
                // 三字节
                // U+00000800 – U+0000FFFF 	1110xxxx 10xxxxxx 10xxxxxx
                // 1110xxxx
                var byte1 = 0xE0 | ((code >> 12) & 0x0F);
                // 10xxxxxx
                var byte2 = 0x80 | ((code >> 6) & 0x3F);
                // 10xxxxxx
                var byte3 = 0x80 | (code & 0x3F);
                res.push(
                    String.fromCharCode(byte1),
                    String.fromCharCode(byte2),
                    String.fromCharCode(byte3)
                );
            }
            /**
             else if (code >= 0x00010000 && code <= 0x001FFFFF) {
        // 四字节
        // U+00010000 – U+001FFFFF 	11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
      } else if (code >= 0x00200000 && code <= 0x03FFFFFF) {
        // 五字节
        // U+00200000 – U+03FFFFFF 	111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
      } else  if (code >= 0x04000000 && code <= 0x7FFFFFFF){
        // 六字节
        // U+04000000 – U+7FFFFFFF 	1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx
      }
             **/
        }

        return res.join('');
    };
    if (!str) {
        return '';
    }
    var utf8 = UTF16ToUTF8(str); // 转成UTF8
    var i = 0; // 遍历索引
    var len = utf8.length;
    var res = [];
    while (i < len) {
        var c1 = utf8.charCodeAt(i++) & 0xFF;
        res.push(table[c1 >> 2]);
        // 需要补2个=
        if (i === len) {
            res.push(table[(c1 & 0x3) << 4]);
            res.push('==');
            break;
        }
        var c2 = utf8.charCodeAt(i++);
        // 需要补1个=
        if (i === len) {
            res.push(table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
            res.push(table[(c2 & 0x0F) << 2]);
            res.push('=');
            break;
        }
        var c3 = utf8.charCodeAt(i++);
        res.push(table[((c1 & 0x3) << 4) | ((c2 >> 4) & 0x0F)]);
        res.push(table[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)]);
        res.push(table[c3 & 0x3F]);
    }

    return res.join('');
}