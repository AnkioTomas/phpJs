function foreach($array,$handler) {
    let i = 0,
        kl = $array.length,
        _keys = $array.keys(),
        _values = $array.values();
    while (i < kl) {
        if ($handler.length === 1) {
            $handler(_keys[i]);
        } else {
            $handler(_keys[i], _values[i]);
        }
        i++;
    }
}
