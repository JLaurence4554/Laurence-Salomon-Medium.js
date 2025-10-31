function substrings(n) {
    const MOD = 1e9 + 7;
    let total = 0;
    let f = 0; 

    for (let i = 0; i < n.length; i++) {
        const digit = Number(n[i]);
        f = (f * 10 + digit * (i + 1)) % MOD;
        total = (total + f) % MOD;
    }

    return total;
}