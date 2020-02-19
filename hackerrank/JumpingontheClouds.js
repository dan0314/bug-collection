
function jumpingOnClouds(c) {
    let result = 0;
    let i = 0;
    while (i < c.length - 1) {
        if ((i + 2 < c.length) && (c[i + 2] === 0)) {
            result++;
            i += 2;
        } else {
            result++;
            i += 1;
        }

    }
    return result;

    // const group = c.reduce((acc, curr) => {
    //     if (curr in acc) {
    //         acc[curr]++;
    //     } else {
    //         acc[curr] = 1;
    //     }
    //     return acc;
    // }, {});
    // let result = 0;
    // Object.keys(group).forEach((item) => {
    //     if (+item === 1) {
    //         result += 1;
    //     }
    //     result += Math.floor(group[item] / 2)
    // });
    // return result;

}

// console.log(jumpingOnClouds('0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0 1 0 0 0 1 0 0 1 0 0 0 1 0 1 0 0 0 0 0 0 0 0 1 0 0 1 0 1 0 0'.split(' ')))
// console.log(jumpingOnClouds('0 0 1 0 0 1 0'.split(' ')))
// console.log(jumpingOnClouds('0 0 1 0 0 0 0 1 0 0'.split(' ')))