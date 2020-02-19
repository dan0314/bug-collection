let num = 0;
function sockMerchant(n, ar) {
    ar.sort();
    equals(ar, n);
    return num;
}
function equals(arr, n) {
    if (n <= 1) return false;
    if (arr[0] === arr[1]) {
        num += 1;
        equals(arr.slice(2), n - 2);
    } else {
        equals(arr.slice(1), n - 1);
    }
}


