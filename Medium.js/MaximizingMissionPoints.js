cities.sort((a, b) => a.height - b.height);

    const dp = new Map();
    let maxPoints = 0;

    for (const city of cities) {
        const { latitude, longitude, points } = city;
        let bestPrev = 0;

        for (let dLat = -d_lat; dLat <= d_lat; dLat++) {
            for (let dLong = -d_long; dLong <= d_long; dLong++) {
                const key = `${latitude + dLat},${longitude + dLong}`;
                if (dp.has(key)) {
                    bestPrev = Math.max(bestPrev, dp.get(key));
                }
            }
        }

        const total = bestPrev + points;
        const key = `${latitude},${longitude}`;
        dp.set(key, Math.max(dp.get(key) || 0, total));
        maxPoints = Math.max(maxPoints, total);
    }

    console.log(maxPoints);
