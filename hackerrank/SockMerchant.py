import itertools


def sockMerchant(n, ar):
    ar.sort()
    x = 0
    for _, j in itertools.groupby(ar):
        x += len(list(j)) // 2
    return x
