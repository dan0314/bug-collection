import itertools

def jumpingOnClouds(c):
    # return math.ceil(n / 2)
    groups = itertools.groupby(c)
    result = 0
    for g, gp in groups:
        if g == 1:
            result += 1
        result += len(list(gp)) // 2
    return result
