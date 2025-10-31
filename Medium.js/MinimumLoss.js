function minimumLoss(prices) {
    const n = prices.length;
    const priceWithIndex = prices.map((price, index) => ({ price, index }));
    priceWithIndex.sort((a, b) => a.price - b.price);
    let minLoss = Infinity;
    for (let i = 1; i < n; i++) {
        const higher = priceWithIndex[i];
        const lower = priceWithIndex[i - 1];
        if (higher.index < lower.index) {
            minLoss = Math.min(minLoss, higher.price - lower.price);
        }
    }
    return minLoss;
}
