function foreach($array,$handler) {
    if (php.empty($array)) return;
    if (php.is_array($array)) {
        $array.forEach(function (k, v) {
            if ($handler.length === 1) {
                return $handler(v);
            } else {
                return $handler(v, k);
            }
        })
    } else {
        let i = 0,
            kl = $array.length,
            _keys = $array.keys(),
            _values = $array.values();
        while (i < kl) {
            var $result = false;
            if ($handler.length === 1) {
                $result = $handler(_keys[i]);
            } else {
                $result = $handler(_keys[i], _values[i]);
            }
            i++;
            if ($result === false) {
                break;
            }
        }
    }

}
