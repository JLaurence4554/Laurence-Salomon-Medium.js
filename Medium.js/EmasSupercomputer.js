function twoPluses(grid) {
    const n = grid.length;
    const m = grid[0].length;
    const pluses = [];

    // Function to get cells of a plus
    function getCells(r, c, k) {
        const cells = [[r, c]];
        for (let i = 1; i <= k; i++) {
            cells.push([r + i, c]);
            cells.push([r - i, c]);
            cells.push([r, c + i]);
            cells.push([r, c - i]);
        }
        return cells;
    }

    // Generate all pluses
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            if (grid[r][c] !== 'G') continue;
            let k = 0;
            while (true) {
                const cells = getCells(r, c, k);
                if (cells.every(([i,j]) => i >= 0 && i < n && j >=0 && j < m && grid[i][j] === 'G')) {
                    pluses.push({ r, c, k, area: 1 + 4*k, cells });
                    k++;
                } else {
                    break;
                }
            }
        }
    }

    // Sort pluses by area descending
    pluses.sort((a,b) => b.area - a.area);

    let maxProduct = 0;

    // Check all pairs
    for (let i = 0; i < pluses.length; i++) {
        for (let j = i+1; j < pluses.length; j++) {
            const set1 = new Set(pluses[i].cells.map(c => c.join(',')));
            const overlap = pluses[j].cells.some(c => set1.has(c.join(',')));
            if (!overlap) {
                const product = pluses[i].area * pluses[j].area;
                if (product > maxProduct) maxProduct = product;
            }
        }
    }

    return maxProduct;
}