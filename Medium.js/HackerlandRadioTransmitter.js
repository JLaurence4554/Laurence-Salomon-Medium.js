function hackerlandRadioTransmitters(x, k) {
    x.sort((a, b) => a - b);
    let n = x.length;
    let count = 0;
    let i = 0;

    while (i < n) {
        count++;
        let loc = x[i] + k;

        while (i < n && x[i] <= loc) i++;
        i--;

        loc = x[i] + k;
        while (i < n && x[i] <= loc) i++;
    }

    return count;
}