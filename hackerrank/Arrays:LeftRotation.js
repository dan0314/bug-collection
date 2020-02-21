function rotLeft(a, d) {
    return a.slice(d, a.length).concat(a.slice(0, d));
}