function missingNumbers(arr, brr) {
    const freqA = {};
    const freqB = {};

    for (const num of arr) {
        freqA[num] = (freqA[num] || 0) + 1;
    }

    for (const num of brr) {
        freqB[num] = (freqB[num] || 0) + 1;
    }

    const missing = [];

    for (const num in freqB) {
        if (freqB[num] !== freqA[num]) {
            missing.push(Number(num));
        }
    }

    return missing.sort((a, b) => a - b);
}
