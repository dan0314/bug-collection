def minimumBribes(q):
    # print("============")
    steps = 0
    for idx, stick in enumerate(q):
        # print("Working on %s at pos %s" % (stick, idx))
        if stick - idx > 3:
            print("Too chaotic")
            return
        for inner_idx in range(max(stick-2-1, 0), idx):
            if q[inner_idx] > stick:
                # print("%s > %s, +1" % (q[inner_idx], stick))
                steps += 1
    print(steps)
 