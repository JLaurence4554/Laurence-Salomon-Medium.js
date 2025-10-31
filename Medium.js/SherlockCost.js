function cost(B) {
    const n = B.length;
    let low = 0; 
    let high = 0; 

    for (let i = 1; i < n; i++) {
        const lowToLow = low;
        const highToLow = high + Math.abs(B[i - 1] - 1);
        const lowToHigh = low + Math.abs(B[i] - 1);
        const highToHigh = high + Math.abs(B[i] - B[i - 1]);

        const newLow = Math.max(lowToLow, highToLow);
        const newHigh = Math.max(lowToHigh, highToHigh);

        low = newLow;
        high = newHigh;
    }

    return Math.max(low, high);
}