function foreach($array,$handler) {
    for (let key in $array) {
        if ($handler.length === 1) {
            $handler(key);
        } else {
            $handler(key, $array[key]);
        }
    }
}