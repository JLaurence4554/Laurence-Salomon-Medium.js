function commonChild(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

module.exports = commonChild;

// Sample input / quick runner
// To run: node CommonChild.js
if (require.main === module) {
    const s1 = 'HARRY';
    const s2 = 'SALLY';
    console.log('s1:', s1);
    console.log('s2:', s2);
    console.log('Longest common subsequence length:', commonChild(s1, s2));
}

