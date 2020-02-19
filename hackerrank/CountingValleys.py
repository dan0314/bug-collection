import itertools

def countingValleys(n, s):
    return len(list(filter(lambda g: g[0], itertools.groupby(itertools.accumulate(map(lambda ch: 1 if ch == 'U' else -1, s)), key=lambda val: val < 0))))