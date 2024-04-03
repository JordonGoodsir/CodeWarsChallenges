// Returns number of complete beeramid levels
var beeramid = function (bonus, price) {
    let cans = Math.floor(bonus / price)
    let towerHeight = 0

    if (!cans) return 0

    while (cans) {
        const cansInLevel = ((towerHeight + 1) * (towerHeight + 1))
        if (cansInLevel > cans) break

        cans -= cansInLevel
        towerHeight += 1

    }

    return towerHeight
}

console.error(beeramid(5000, 3)); // should === 16


// beeramid(1500, 2); // should === 12