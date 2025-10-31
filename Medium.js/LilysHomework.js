function lilysHomework(arr) {
    function countSwaps(original, target) {
        const temp = [...original];
        const indexMap = new Map();

        for (let i = 0; i < temp.length; i++) {
            indexMap.set(temp[i], i);
        }

        let swaps = 0;

        for (let i = 0; i < temp.length; i++) {
            if (temp[i] !== target[i]) {
                swaps++;

                const correctValue = target[i];
                const toSwapIdx = indexMap.get(correctValue);

                [temp[i], temp[toSwapIdx]] = [temp[toSwapIdx], temp[i]];

                indexMap.set(temp[toSwapIdx], toSwapIdx);
                indexMap.set(temp[i], i);
            }
        }

        return swaps;
    }

    const asc = [...arr].sort((a, b) => a - b);
    const desc = [...arr].sort((a, b) => b - a);

    return Math.min(countSwaps(arr, asc), countSwaps(arr, desc));
}