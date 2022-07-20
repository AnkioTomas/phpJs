function bin2hex (bin)
{

    var i = 0, l = bin.length, chr, hex = ''

    for (i; i < l; ++i)
    {

        chr = bin.charCodeAt(i).toString(16)

        hex += chr.length < 2 ? '0' + chr : chr

    }

    return hex

}
