function almostSorted(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const diff = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sorted[i]) {
            diff.push(i);
        }
    }

    if (diff.length === 0) {
        console.log("yes");
    } else if (diff.length === 2) {
        console.log("yes");
        console.log(`swap ${diff[0] + 1} ${diff[1] + 1}`);
    } else {
        const start = diff[0];
        const end = diff[diff.length - 1];
        const reversed = arr.slice(start, end + 1).reverse();
        const temp = [...arr.slice(0, start), ...reversed, ...arr.slice(end + 1)];

        if (temp.every((val, idx) => val === sorted[idx])) {
            console.log("yes");
            console.log(`reverse ${start + 1} ${end + 1}`);
        } else {
            console.log("no");
        }
    }
}