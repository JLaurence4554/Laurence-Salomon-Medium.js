function equal(arr) {
    let minVal = Math.min(...arr);
    let result = Infinity;

    for (let base = minVal; base >= minVal - 4; base--) {
        let ops = 0;
        for (let a of arr) {
            let diff = a - base;
            ops += Math.floor(diff / 5);
            diff %= 5;
            ops += Math.floor(diff / 2);
            diff %= 2;
            ops += diff;
        }
        result = Math.min(result, ops);
    }
    return result;
}
