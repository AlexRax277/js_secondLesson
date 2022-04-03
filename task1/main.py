import time


def foo(par):
    my_list = [2]
    stop = 2
    while len(my_list) < par:
        for a in range(2, stop + 1):
            k = 0
            for b in range(1, a + 1):
                if a % b == 0:
                    k += 1
            if k == 2 and a not in my_list:
                my_list.append(a)
        stop += 1
    return my_list


start_time = time.time()
res = foo(200)
# print(len(res))
# print(res)
print(time.time() - start_time, "seconds")

