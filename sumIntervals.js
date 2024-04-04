const between = (x, min, max) => {
    return x >= min && x <= max
}

function sumIntervals(intervals) {
    let rangeAns = null
    const augmentedIntervals = [...intervals]

    while (rangeAns === null) {

        let hasOverlapped = false

        //overarching loop of all intervals
        for (let intervalArrayIndex = 0; intervalArrayIndex < augmentedIntervals.length; intervalArrayIndex++) {

            if (hasOverlapped) break

            const checkingAgainst = augmentedIntervals[intervalArrayIndex]

            //loop that makes each interval loop through all others
            for (let i = 0; i < augmentedIntervals.length; i++) {


                if (intervalArrayIndex !== i) {
                    const currentInterval = augmentedIntervals[i]

                    let lowest = null
                    let highest = null



                    currentInterval.forEach((number, index) => {
                        const lowestOfTheTwo = Math.min(number, checkingAgainst[index])
                        const highestOfTheTwo = Math.max(number, checkingAgainst[index])


                        if (lowest === null || lowestOfTheTwo < lowest) lowest = lowestOfTheTwo
                        if (highest === null || highestOfTheTwo > highest) highest = highestOfTheTwo

                        if (between(number, checkingAgainst[0], checkingAgainst[1])) {
                            hasOverlapped = true
                        }
                    })

                    if (hasOverlapped) {
                        const newInterval = [lowest, highest]

                        //delete the other 2 intervals
                        if (i > intervalArrayIndex) {
                            augmentedIntervals.splice(i, 1)
                            augmentedIntervals.splice(intervalArrayIndex, 1)
                        } else {
                            augmentedIntervals.splice(intervalArrayIndex, 1)
                            augmentedIntervals.splice(i, 1)
                        }

                        //insert new interval
                        augmentedIntervals.push(newInterval)
                        break
                    }
                }
            }

        }

        if (!hasOverlapped) {
            rangeAns = augmentedIntervals.reduce((acc, numArr) => {
                const diff = numArr[1] - numArr[0]

                acc += diff
                return acc
            }, 0)
        }
    }

    return rangeAns


    // psudo code
    // for each range go through all other ranges
    // if on range overlap then combine and then reset and go again
    // if no overlap in whole array then loop through and see which range has most
}

console.error(sumIntervals([
    [1,4],[7, 10],[3, 5]
]))