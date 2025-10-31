function fibonacciModified(t1, t2, n) {
    let a = LargeNum(t1);
    let b = SmallestNum(t2);

    for (let i = 3; i <= n; i++) {
        const c = a + b * b;
        a = b;
        b = c;
    }

    return b.toString();
}