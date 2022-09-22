# js_for_php_function

js实现php函数库，方便php开发人员快速在js业务中快速使用已经熟悉的php函数库。 使用方式，直接引入

```
<script src="php.min.js"></script>
<script type="text/javascript">
    console.log(php.array_flip(
        {a: 1, b: 1, c: 2}
    ));
</script>
```

已经实现的函数库如下：

## ctype

[ctype_alnum](http://php.net/manual/zh/function.ctype-alnum.php)  
[ctype_alpha](http://php.net/manual/zh/function.ctype-alpha.php)  
[ctype_cntrl](http://php.net/manual/zh/function.ctype-cntrl.php)  
[ctype_digit](http://php.net/manual/zh/function.ctype-digit.php)  
[ctype_graph](http://php.net/manual/zh/function.ctype-graph.php)  
[ctype_lower](http://php.net/manual/zh/function.ctype-lower.php)  
[ctype_print](http://php.net/manual/zh/function.ctype-print.php)  
[ctype_punct](http://php.net/manual/zh/function.ctype-punct.php)  
[ctype_space](http://php.net/manual/zh/function.ctype-space.php)  
[ctype_upper](http://php.net/manual/zh/function.ctype-upper.php)  
[ctype_xdigit](http://php.net/manual/zh/function.ctype-xdigit.php)

## misc

[pack](http://php.net/manual/zh/function.pack.php)  
[time_sleep_until](http://php.net/manual/zh/function.time-sleep-until.php)  
[uniqid](http://php.net/manual/zh/function.uniqid.php)

## xdiff

[xdiff_string_diff](http://php.net/manual/zh/function.xdiff-string-diff.php)  
[xdiff_string_patch](http://php.net/manual/zh/function.xdiff-string-patch.php)

## strings

[addcslashes](http://php.net/manual/zh/function.addcslashes.php)  
[addslashes](http://php.net/manual/zh/function.addslashes.php)  
[bin2hex](http://php.net/manual/zh/function.bin2hex.php)  
[chop](http://php.net/manual/zh/function.chop.php)  
[chr](http://php.net/manual/zh/function.chr.php)  
[chunk_split](http://php.net/manual/zh/function.chunk-split.php)  
[convert_cyr_string](http://php.net/manual/zh/function.convert-cyr-string.php)  
[convert_uuencode](http://php.net/manual/zh/function.convert-uuencode.php)  
[count_chars](http://php.net/manual/zh/function.count-chars.php)  
[crc32](http://php.net/manual/zh/function.crc32.php)  
[echo](http://php.net/manual/zh/function.echo.php)  
[explode](http://php.net/manual/zh/function.explode.php)  
[get_html_translation_table](http://php.net/manual/zh/function.get-html-translation-table.php)  
[hex2bin](http://php.net/manual/zh/function.hex2bin.php)  
[html_entity_decode](http://php.net/manual/zh/function.html-entity-decode.php)  
[htmlentities](http://php.net/manual/zh/function.htmlentities.php)  
[htmlspecialchars](http://php.net/manual/zh/function.htmlspecialchars.php)  
[htmlspecialchars_decode](http://php.net/manual/zh/function.htmlspecialchars-decode.php)  
[implode](http://php.net/manual/zh/function.implode.php)  
[join](http://php.net/manual/zh/function.join.php)  
[lcfirst](http://php.net/manual/zh/function.lcfirst.php)  
[levenshtein](http://php.net/manual/zh/function.levenshtein.php)  
[localeconv](http://php.net/manual/zh/function.localeconv.php)  
[ltrim](http://php.net/manual/zh/function.ltrim.php)  
[md5](http://php.net/manual/zh/function.md5.php)  
[md5_file](http://php.net/manual/zh/function.md5-file.php)  
[metaphone](http://php.net/manual/zh/function.metaphone.php)  
[money_format](http://php.net/manual/zh/function.money-format.php)  
[nl2br](http://php.net/manual/zh/function.nl2br.php)  
[nl_langinfo](http://php.net/manual/zh/function.nl-langinfo.php)  
[number_format](http://php.net/manual/zh/function.number-format.php)  
[ord](http://php.net/manual/zh/function.ord.php)  
[parse_str](http://php.net/manual/zh/function.parse-str.php)  
[printf](http://php.net/manual/zh/function.printf.php)  
[quoted_printable_decode](http://php.net/manual/zh/function.quoted-printable-decode.php)  
[quoted_printable_encode](http://php.net/manual/zh/function.quoted-printable-encode.php)  
[quotemeta](http://php.net/manual/zh/function.quotemeta.php)  
[rtrim](http://php.net/manual/zh/function.rtrim.php)  
[setlocale](http://php.net/manual/zh/function.setlocale.php)  
[sha1](http://php.net/manual/zh/function.sha1.php)  
[sha1_file](http://php.net/manual/zh/function.sha1-file.php)  
[similar_text](http://php.net/manual/zh/function.similar-text.php)  
[soundex](http://php.net/manual/zh/function.soundex.php)  
[split](http://php.net/manual/zh/function.split.php)  
[sprintf](http://php.net/manual/zh/function.sprintf.php)  
[sscanf](http://php.net/manual/zh/function.sscanf.php)  
[str_getcsv](http://php.net/manual/zh/function.str-getcsv.php)  
[str_ireplace](http://php.net/manual/zh/function.str-ireplace.php)  
[str_pad](http://php.net/manual/zh/function.str-pad.php)  
[str_repeat](http://php.net/manual/zh/function.str-repeat.php)  
[str_replace](http://php.net/manual/zh/function.str-replace.php)  
[str_rot13](http://php.net/manual/zh/function.str-rot13.php)  
[str_shuffle](http://php.net/manual/zh/function.str-shuffle.php)  
[str_split](http://php.net/manual/zh/function.str-split.php)  
[str_word_count](http://php.net/manual/zh/function.str-word-count.php)  
[strcasecmp](http://php.net/manual/zh/function.strcasecmp.php)  
[strchr](http://php.net/manual/zh/function.strchr.php)  
[strcmp](http://php.net/manual/zh/function.strcmp.php)  
[strcoll](http://php.net/manual/zh/function.strcoll.php)  
[strcspn](http://php.net/manual/zh/function.strcspn.php)  
[strip_tags](http://php.net/manual/zh/function.strip-tags.php)  
[stripos](http://php.net/manual/zh/function.stripos.php)  
[stripslashes](http://php.net/manual/zh/function.stripslashes.php)  
[stristr](http://php.net/manual/zh/function.stristr.php)  
[strlen](http://php.net/manual/zh/function.strlen.php)  
[strnatcasecmp](http://php.net/manual/zh/function.strnatcasecmp.php)  
[strnatcmp](http://php.net/manual/zh/function.strnatcmp.php)  
[strncasecmp](http://php.net/manual/zh/function.strncasecmp.php)  
[strncmp](http://php.net/manual/zh/function.strncmp.php)  
[strpbrk](http://php.net/manual/zh/function.strpbrk.php)  
[strpos](http://php.net/manual/zh/function.strpos.php)  
[strrchr](http://php.net/manual/zh/function.strrchr.php)  
[strrev](http://php.net/manual/zh/function.strrev.php)  
[strripos](http://php.net/manual/zh/function.strripos.php)  
[strrpos](http://php.net/manual/zh/function.strrpos.php)  
[strspn](http://php.net/manual/zh/function.strspn.php)  
[strstr](http://php.net/manual/zh/function.strstr.php)  
[strtok](http://php.net/manual/zh/function.strtok.php)  
[strtolower](http://php.net/manual/zh/function.strtolower.php)  
[strtoupper](http://php.net/manual/zh/function.strtoupper.php)  
[strtr](http://php.net/manual/zh/function.strtr.php)  
[substr](http://php.net/manual/zh/function.substr.php)  
[substr_compare](http://php.net/manual/zh/function.substr-compare.php)  
[substr_count](http://php.net/manual/zh/function.substr-count.php)  
[substr_replace](http://php.net/manual/zh/function.substr-replace.php)  
[trim](http://php.net/manual/zh/function.trim.php)  
[ucfirst](http://php.net/manual/zh/function.ucfirst.php)  
[ucwords](http://php.net/manual/zh/function.ucwords.php)  
[vprintf](http://php.net/manual/zh/function.vprintf.php)  
[vsprintf](http://php.net/manual/zh/function.vsprintf.php)  
[wordwrap](http://php.net/manual/zh/function.wordwrap.php)

## bc

[bcadd](http://php.net/manual/zh/function.bcadd.php)  
[bccomp](http://php.net/manual/zh/function.bccomp.php)  
[bcdiv](http://php.net/manual/zh/function.bcdiv.php)  
[bcmul](http://php.net/manual/zh/function.bcmul.php)  
[bcround](http://php.net/manual/zh/function.bcround.php)  
[bcscale](http://php.net/manual/zh/function.bcscale.php)  
[bcsub](http://php.net/manual/zh/function.bcsub.php)

## array

[array](http://php.net/manual/zh/function.array.php)  
[array_change_key_case](http://php.net/manual/zh/function.array-change-key-case.php)  
[array_chunk](http://php.net/manual/zh/function.array-chunk.php)  
[array_combine](http://php.net/manual/zh/function.array-combine.php)  
[array_count_values](http://php.net/manual/zh/function.array-count-values.php)  
[array_diff](http://php.net/manual/zh/function.array-diff.php)  
[array_diff_assoc](http://php.net/manual/zh/function.array-diff-assoc.php)  
[array_diff_key](http://php.net/manual/zh/function.array-diff-key.php)  
[array_diff_uassoc](http://php.net/manual/zh/function.array-diff-uassoc.php)  
[array_diff_ukey](http://php.net/manual/zh/function.array-diff-ukey.php)  
[array_fill](http://php.net/manual/zh/function.array-fill.php)  
[array_fill_keys](http://php.net/manual/zh/function.array-fill-keys.php)  
[array_filter](http://php.net/manual/zh/function.array-filter.php)  
[array_flip](http://php.net/manual/zh/function.array-flip.php)  
[array_intersect](http://php.net/manual/zh/function.array-intersect.php)  
[array_intersect_assoc](http://php.net/manual/zh/function.array-intersect-assoc.php)  
[array_intersect_key](http://php.net/manual/zh/function.array-intersect-key.php)  
[array_intersect_uassoc](http://php.net/manual/zh/function.array-intersect-uassoc.php)  
[array_intersect_ukey](http://php.net/manual/zh/function.array-intersect-ukey.php)  
[array_key_exists](http://php.net/manual/zh/function.array-key-exists.php)  
[array_keys](http://php.net/manual/zh/function.array-keys.php)  
[array_map](http://php.net/manual/zh/function.array-map.php)  
[array_merge](http://php.net/manual/zh/function.array-merge.php)  
[array_merge_recursive](http://php.net/manual/zh/function.array-merge-recursive.php)  
[array_multisort](http://php.net/manual/zh/function.array-multisort.php)  
[array_pad](http://php.net/manual/zh/function.array-pad.php)  
[array_pop](http://php.net/manual/zh/function.array-pop.php)  
[array_product](http://php.net/manual/zh/function.array-product.php)  
[array_push](http://php.net/manual/zh/function.array-push.php)  
[array_rand](http://php.net/manual/zh/function.array-rand.php)  
[array_reduce](http://php.net/manual/zh/function.array-reduce.php)  
[array_replace](http://php.net/manual/zh/function.array-replace.php)  
[array_replace_recursive](http://php.net/manual/zh/function.array-replace-recursive.php)  
[array_reverse](http://php.net/manual/zh/function.array-reverse.php)  
[array_search](http://php.net/manual/zh/function.array-search.php)  
[array_shift](http://php.net/manual/zh/function.array-shift.php)  
[array_slice](http://php.net/manual/zh/function.array-slice.php)  
[array_splice](http://php.net/manual/zh/function.array-splice.php)  
[array_sum](http://php.net/manual/zh/function.array-sum.php)  
[array_udiff](http://php.net/manual/zh/function.array-udiff.php)  
[array_udiff_assoc](http://php.net/manual/zh/function.array-udiff-assoc.php)  
[array_udiff_uassoc](http://php.net/manual/zh/function.array-udiff-uassoc.php)  
[array_uintersect](http://php.net/manual/zh/function.array-uintersect.php)  
[array_uintersect_assoc](http://php.net/manual/zh/function.array-uintersect-assoc.php)  
[array_uintersect_uassoc](http://php.net/manual/zh/function.array-uintersect-uassoc.php)  
[array_unique](http://php.net/manual/zh/function.array-unique.php)  
[array_unshift](http://php.net/manual/zh/function.array-unshift.php)  
[array_values](http://php.net/manual/zh/function.array-values.php)  
[array_walk](http://php.net/manual/zh/function.array-walk.php)  
[array_walk_recursive](http://php.net/manual/zh/function.array-walk-recursive.php)  
[arsort](http://php.net/manual/zh/function.arsort.php)  
[asort](http://php.net/manual/zh/function.asort.php)  
[compact](http://php.net/manual/zh/function.compact.php)  
[count](http://php.net/manual/zh/function.count.php)  
[current](http://php.net/manual/zh/function.current.php)  
[each](http://php.net/manual/zh/function.each.php)  
[end](http://php.net/manual/zh/function.end.php)  
[foreach](http://php.net/manual/zh/function.foreach.php)  
[in_array](http://php.net/manual/zh/function.in-array.php)  
[key](http://php.net/manual/zh/function.key.php)  
[krsort](http://php.net/manual/zh/function.krsort.php)  
[ksort](http://php.net/manual/zh/function.ksort.php)  
[natcasesort](http://php.net/manual/zh/function.natcasesort.php)  
[natsort](http://php.net/manual/zh/function.natsort.php)  
[next](http://php.net/manual/zh/function.next.php)  
[pos](http://php.net/manual/zh/function.pos.php)  
[prev](http://php.net/manual/zh/function.prev.php)  
[range](http://php.net/manual/zh/function.range.php)  
[reset](http://php.net/manual/zh/function.reset.php)  
[rsort](http://php.net/manual/zh/function.rsort.php)  
[shuffle](http://php.net/manual/zh/function.shuffle.php)  
[sizeof](http://php.net/manual/zh/function.sizeof.php)  
[sort](http://php.net/manual/zh/function.sort.php)  
[uasort](http://php.net/manual/zh/function.uasort.php)  
[uksort](http://php.net/manual/zh/function.uksort.php)  
[usort](http://php.net/manual/zh/function.usort.php)

## datetime

[checkdate](http://php.net/manual/zh/function.checkdate.php)  
[date](http://php.net/manual/zh/function.date.php)  
[date_parse](http://php.net/manual/zh/function.date-parse.php)  
[getdate](http://php.net/manual/zh/function.getdate.php)  
[gettimeofday](http://php.net/manual/zh/function.gettimeofday.php)  
[gmdate](http://php.net/manual/zh/function.gmdate.php)  
[gmmktime](http://php.net/manual/zh/function.gmmktime.php)  
[gmstrftime](http://php.net/manual/zh/function.gmstrftime.php)  
[idate](http://php.net/manual/zh/function.idate.php)  
[microtime](http://php.net/manual/zh/function.microtime.php)  
[mktime](http://php.net/manual/zh/function.mktime.php)  
[strftime](http://php.net/manual/zh/function.strftime.php)  
[strptime](http://php.net/manual/zh/function.strptime.php)  
[strtotime](http://php.net/manual/zh/function.strtotime.php)  
[time](http://php.net/manual/zh/function.time.php)

## network

[inet_ntop](http://php.net/manual/zh/function.inet-ntop.php)  
[inet_pton](http://php.net/manual/zh/function.inet-pton.php)  
[ip2long](http://php.net/manual/zh/function.ip2long.php)  
[long2ip](http://php.net/manual/zh/function.long2ip.php)  
[setcookie](http://php.net/manual/zh/function.setcookie.php)  
[setrawcookie](http://php.net/manual/zh/function.setrawcookie.php)

## var

[doubleval](http://php.net/manual/zh/function.doubleval.php)  
[empty](http://php.net/manual/zh/function.empty.php)  
[floatval](http://php.net/manual/zh/function.floatval.php)  
[gettype](http://php.net/manual/zh/function.gettype.php)  
[intval](http://php.net/manual/zh/function.intval.php)  
[is_array](http://php.net/manual/zh/function.is-array.php)  
[is_binary](http://php.net/manual/zh/function.is-binary.php)  
[is_bool](http://php.net/manual/zh/function.is-bool.php)  
[is_buffer](http://php.net/manual/zh/function.is-buffer.php)  
[is_callable](http://php.net/manual/zh/function.is-callable.php)  
[is_double](http://php.net/manual/zh/function.is-double.php)  
[is_float](http://php.net/manual/zh/function.is-float.php)  
[is_int](http://php.net/manual/zh/function.is-int.php)  
[is_integer](http://php.net/manual/zh/function.is-integer.php)  
[is_long](http://php.net/manual/zh/function.is-long.php)  
[is_null](http://php.net/manual/zh/function.is-null.php)  
[is_numeric](http://php.net/manual/zh/function.is-numeric.php)  
[is_object](http://php.net/manual/zh/function.is-object.php)  
[is_real](http://php.net/manual/zh/function.is-real.php)  
[is_resource](http://php.net/manual/zh/function.is-resource.php)  
[is_scalar](http://php.net/manual/zh/function.is-scalar.php)  
[is_string](http://php.net/manual/zh/function.is-string.php)  
[is_unicode](http://php.net/manual/zh/function.is-unicode.php)  
[isset](http://php.net/manual/zh/function.isset.php)  
[print_r](http://php.net/manual/zh/function.print-r.php)  
[serialize](http://php.net/manual/zh/function.serialize.php)  
[settype](http://php.net/manual/zh/function.settype.php)  
[strval](http://php.net/manual/zh/function.strval.php)  
[unserialize](http://php.net/manual/zh/function.unserialize.php)  
[var_dump](http://php.net/manual/zh/function.var-dump.php)  
[var_export](http://php.net/manual/zh/function.var-export.php)

## filesystem

[basename](http://php.net/manual/zh/function.basename.php)  
[dirname](http://php.net/manual/zh/function.dirname.php)  
[file_get_contents](http://php.net/manual/zh/function.file-get-contents.php)  
[pathinfo](http://php.net/manual/zh/function.pathinfo.php)  
[realpath](http://php.net/manual/zh/function.realpath.php)

## math

[abs](http://php.net/manual/zh/function.abs.php)  
[acos](http://php.net/manual/zh/function.acos.php)  
[acosh](http://php.net/manual/zh/function.acosh.php)  
[asin](http://php.net/manual/zh/function.asin.php)  
[asinh](http://php.net/manual/zh/function.asinh.php)  
[atan](http://php.net/manual/zh/function.atan.php)  
[atan2](http://php.net/manual/zh/function.atan2.php)  
[atanh](http://php.net/manual/zh/function.atanh.php)  
[base_convert](http://php.net/manual/zh/function.base-convert.php)  
[bindec](http://php.net/manual/zh/function.bindec.php)  
[ceil](http://php.net/manual/zh/function.ceil.php)  
[cos](http://php.net/manual/zh/function.cos.php)  
[cosh](http://php.net/manual/zh/function.cosh.php)  
[decbin](http://php.net/manual/zh/function.decbin.php)  
[dechex](http://php.net/manual/zh/function.dechex.php)  
[decoct](http://php.net/manual/zh/function.decoct.php)  
[deg2rad](http://php.net/manual/zh/function.deg2rad.php)  
[exp](http://php.net/manual/zh/function.exp.php)  
[expm1](http://php.net/manual/zh/function.expm1.php)  
[floor](http://php.net/manual/zh/function.floor.php)  
[fmod](http://php.net/manual/zh/function.fmod.php)  
[getrandmax](http://php.net/manual/zh/function.getrandmax.php)  
[hexdec](http://php.net/manual/zh/function.hexdec.php)  
[hypot](http://php.net/manual/zh/function.hypot.php)  
[is_finite](http://php.net/manual/zh/function.is-finite.php)  
[is_infinite](http://php.net/manual/zh/function.is-infinite.php)  
[is_nan](http://php.net/manual/zh/function.is-nan.php)  
[lcg_value](http://php.net/manual/zh/function.lcg-value.php)  
[log](http://php.net/manual/zh/function.log.php)  
[log10](http://php.net/manual/zh/function.log10.php)  
[log1p](http://php.net/manual/zh/function.log1p.php)  
[max](http://php.net/manual/zh/function.max.php)  
[min](http://php.net/manual/zh/function.min.php)  
[mt_getrandmax](http://php.net/manual/zh/function.mt-getrandmax.php)  
[mt_rand](http://php.net/manual/zh/function.mt-rand.php)  
[octdec](http://php.net/manual/zh/function.octdec.php)  
[pi](http://php.net/manual/zh/function.pi.php)  
[pow](http://php.net/manual/zh/function.pow.php)  
[rad2deg](http://php.net/manual/zh/function.rad2deg.php)  
[rand](http://php.net/manual/zh/function.rand.php)  
[round](http://php.net/manual/zh/function.round.php)  
[sin](http://php.net/manual/zh/function.sin.php)  
[sinh](http://php.net/manual/zh/function.sinh.php)  
[sqrt](http://php.net/manual/zh/function.sqrt.php)  
[tan](http://php.net/manual/zh/function.tan.php)  
[tanh](http://php.net/manual/zh/function.tanh.php)

## url

[base64_decode](http://php.net/manual/zh/function.base64-decode.php)  
[base64_encode](http://php.net/manual/zh/function.base64-encode.php)  
[get_headers](http://php.net/manual/zh/function.get-headers.php)  
[get_meta_tags](http://php.net/manual/zh/function.get-meta-tags.php)  
[http_build_query](http://php.net/manual/zh/function.http-build-query.php)  
[parse_url](http://php.net/manual/zh/function.parse-url.php)  
[rawurldecode](http://php.net/manual/zh/function.rawurldecode.php)  
[rawurlencode](http://php.net/manual/zh/function.rawurlencode.php)  
[urldecode](http://php.net/manual/zh/function.urldecode.php)  
[urlencode](http://php.net/manual/zh/function.urlencode.php)

## xml

[utf8_decode](http://php.net/manual/zh/function.utf8-decode.php)  
[utf8_encode](http://php.net/manual/zh/function.utf8-encode.php)

## info

[assert_options](http://php.net/manual/zh/function.assert-options.php)  
[getenv](http://php.net/manual/zh/function.getenv.php)  
[getlastmod](http://php.net/manual/zh/function.getlastmod.php)  
[ini_get](http://php.net/manual/zh/function.ini-get.php)  
[ini_set](http://php.net/manual/zh/function.ini-set.php)  
[set_time_limit](http://php.net/manual/zh/function.set-time-limit.php)  
[version_compare](http://php.net/manual/zh/function.version-compare.php)

## json

[json_decode](http://php.net/manual/zh/function.json-decode.php)  
[json_encode](http://php.net/manual/zh/function.json-encode.php)  
[json_last_error](http://php.net/manual/zh/function.json-last-error.php)

## funchand

[call_user_func](http://php.net/manual/zh/function.call-user-func.php)  
[call_user_func_array](http://php.net/manual/zh/function.call-user-func-array.php)  
[create_function](http://php.net/manual/zh/function.create-function.php)  
[function_exists](http://php.net/manual/zh/function.function-exists.php)  
[get_defined_functions](http://php.net/manual/zh/function.get-defined-functions.php)

## net-gopher

[gopher_parsedir](http://php.net/manual/zh/function.gopher-parsedir.php)

## exec

[escapeshellarg](http://php.net/manual/zh/function.escapeshellarg.php)

## pcre

[preg_grep](http://php.net/manual/zh/function.preg-grep.php)  
[preg_quote](http://php.net/manual/zh/function.preg-quote.php)  
[sql_regcase](http://php.net/manual/zh/function.sql-regcase.php)

## i18n

[i18n_loc_get_default](http://php.net/manual/zh/function.i18n-loc-get-default.php)  
[i18n_loc_set_default](http://php.net/manual/zh/function.i18n-loc-set-default.php)  