function shortPalindrome(s) {
    const MOD = 1e9 + 7;
    const count1 = new Array(26).fill(0);
    const count2 = Array.from({ length: 26 }, () => new Array(26).fill(0));
    const count3 = Array.from({ length: 26 }, () => new Array(26).fill(0));
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const c = s.charCodeAt(i) - 97;

        for (let j = 0; j < 26; j++) {
            result = (result + count3[c][j]) % MOD;
        }

        for (let j = 0; j < 26; j++) {
            count3[j][c] = (count3[j][c] + count2[j][c]) % MOD;
        }

        for (let j = 0; j < 26; j++) {
            count2[j][c] = (count2[j][c] + count1[j]) % MOD;
        }

        count1[c] = (count1[c] + 1) % MOD;
    }

    return result;
}
