function findWaldo(crowd) {
    // Return y (row) and x (column) coordinates of Waldo ([0,0] is top-left)
    const count = {};
    crowd.forEach((v, y) => [...v].forEach((v, x) => count[v] = [(count[v] ?.[0] ?? 0) + 1, [y, x]]));
    for(const [n, p] of Object.values(count)) {
        if (n == 1) return p;
    }
}