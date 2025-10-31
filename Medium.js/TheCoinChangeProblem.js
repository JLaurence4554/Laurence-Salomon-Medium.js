function getWays(n, c) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;

    for (let coin of c) {
        for (let amount = coin; amount <= n; amount++) {
            dp[amount] += dp[amount - coin];
        }
    }

    return dp[n];
}
