function connectedCellInGrid(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const visited = Array.from({ length: n }, () => Array(m).fill(false));

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1],  [1, 0], [1, 1]
    ];

    function dfs(i, j) {
        if (i < 0 || j < 0 || i >= n || j >= m) return 0;
        if (visited[i][j] || matrix[i][j] === 0) return 0;

        visited[i][j] = true;
        let count = 1;

        for (const [di, dj] of directions) {
            count += dfs(i + di, j + dj);
        }

        return count;
    }

    let maxRegion = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!visited[i][j] && matrix[i][j] === 1) {
                const size = dfs(i, j);
                if (size > maxRegion) maxRegion = size;
            }
        }
    }

    return maxRegion;
}

