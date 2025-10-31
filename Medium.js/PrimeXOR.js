function primeXor(arr) {
   const MOD = 1000000007;
    const MAX_XOR = 8192;

    const isPrime = Array(MAX_XOR).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;
    for (let i = 2; i * i < MAX_XOR; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < MAX_XOR; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const freq = {};
    for (const num of a) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let dp = Array(MAX_XOR).fill(0);
    dp[0] = 1;

    for (const [key, count] of Object.entries(freq)) {
        const val = parseInt(key, 10);
        const newDp = Array(MAX_XOR).fill(0);

        const evenWays = Math.floor(count / 2) + 1;
        const oddWays = Math.floor((count + 1) / 2);

        for (let x = 0; x < MAX_XOR; x++) {
            if (dp[x] === 0) continue;

            newDp[x] = (newDp[x] + dp[x] * evenWays) % MOD;

            const y = x ^ val;
            newDp[y] = (newDp[y] + dp[x] * oddWays) % MOD;
        }

        dp = newDp;
    }

    let result = 0;
    for (let i = 2; i < MAX_XOR; i++) {
        if (isPrime[i]) {
            result = (result + dp[i]) % MOD;
        }
    }

    return result;
}