function countArray(n, k, x) {
    const MOD = 1e9 + 7;
    let same = 0;
    let diff = 1;

    for (let i = 2; i <= n; i++) {
        const newSame = diff % MOD;
        const newDiff = ((same * (k - 1)) % MOD + (diff * (k - 2)) % MOD) % MOD;
        same = newSame;
        diff = newDiff;
    }

    return x === 1 ? same : diff;
}