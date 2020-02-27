function minimumSwaps(arr) {
    let n = 0;
    for (let i = 0; i < arr.length;) {
        if (+arr[i] === i + 1) {
            i += 1;
            continue
        }

        const otherIdx = arr[i] - 1;
        const otherVal = arr[otherIdx];
        [arr[i], arr[otherIdx]] = [otherVal, arr[i]];
        n++;
    }
    return n;

}

console.log(minimumSwaps('4 3 1 2'.split(' ')))
