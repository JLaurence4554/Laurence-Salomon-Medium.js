function abbreviation(a, b) {
    const m = a.length;
    const n = b.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));
    dp[0][0] = true;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (dp[i][j]) {
            
                if (i < m && a[i] === a[i].toLowerCase()) {
                    dp[i + 1][j] = true;
                }

                if (i < m && j < n && a[i].toUpperCase() === b[j]) {
                    dp[i + 1][j + 1] = true;
                }
            }
        }
    }

    return dp[m][n] ? "YES" : "NO";
}