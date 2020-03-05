
function matchingStrings(strings, queries) {
    const strObj = strings.reduce(function (allNames, name) {
        if (name in allNames) {
            allNames[name]++;
        }
        else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});

    return queries.map((val) => strObj[val] || 0);

}




matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']);