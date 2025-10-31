function pairs(k, arr) {
    const set = new Set(arr);
    let count = 0;

    for (const num of arr) {
        if (set.has(num + k)) {
            count++;
        }
    }

    return count;
}

