function sherlockAndAnagrams(s) {
    const map = new Map();
    const n = s.length;

    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            
            const sub = s.substring(i, j).split('').sort().join('');
            const count = map.get(sub) || 0;
            map.set(sub, count + 1);
        }
    }

    let total = 0;
    for (const count of map.values()) {
        if (count > 1) {
            total += (count * (count - 1)) / 2;
        }
    }

    return total;
}
