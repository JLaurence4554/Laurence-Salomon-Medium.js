function balancedSums(arr) {
    let total = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (const num of arr) {
        if (leftSum === total - leftSum - num) {
            return "YES";
        }
        leftSum += num;
    }

    return "NO";
}
