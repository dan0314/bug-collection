function countingValleys(n, s) {
    const sArr = s.split('').map(val => val === 'U' ? 1 : -1);
    let valleys = 0
    sArr.reduce((acc, curr) => {
        if (acc >= 0 && acc + curr < 0) {
            valleys += 1;
        }
        return acc + curr;
    }, 0);
    return valleys;
}
