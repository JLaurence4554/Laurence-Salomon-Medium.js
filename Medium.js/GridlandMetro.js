function gridlandMetro(n, m, k, tracks) {
    const rows = new Map();

    for (let i = 0; i < k; i++) {
        const [r, c1, c2] = track[i];
        if (!rows.has(r)) rows.set(r, []);
        rows.get(r).push([BigInt(c1), BigInt(c2)]);
    }

    const totalCells = BigInt(n) * BigInt(m);
    let occupied = 0n;

    for (const intervals of rows.values()) {
        intervals.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));

        let curStart = intervals[0][0];
        let curEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const [s, e] = intervals[i];
            if (s <= curEnd + 1n) {
                if (e > curEnd) curEnd = e;
            } else {
                occupied += (curEnd - curStart + 1n);
                curStart = s;
                curEnd = e;
            }
        }
        occupied += (curEnd - curStart + 1n);
    }

    return (totalCells - occupied).toString();
}