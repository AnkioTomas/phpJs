var d = {1: "122", 2: "22"};
var m = [2222, 1];
console.log(d, m)

function foreach($array, $handler) {
    for (let key in $array) {
        if ($handler.length === 1) {
            $handler(key);
        } else {
            $handler(key, $array[key]);
        }
    }
}

foreach(d, function (m, n) {
    console.log(m, n)
})
foreach(m, function (m, n) {
    console.log(m, n)
})