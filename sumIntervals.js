const between = (x, min, max) => {
    return x >= min && x <= max
}


// v1
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

// console.error(sumIntervals([
//     [1,4],[7, 10],[3, 5]
// ]))

function sumIntervalsV2(intervals) {
    let rangeAns = null
    const augmentedIntervals = [...intervals]


    let hasOverlapped = false

    //overarching loop of all intervals
    for (let intervalArrayIndex = 0; intervalArrayIndex < augmentedIntervals.length; intervalArrayIndex++) {

        const checkingAgainst = augmentedIntervals[intervalArrayIndex]

        //loop that makes each interval loop through all others
        if (checkingAgainst.length === 2) {
            for (let i = 0; i < augmentedIntervals.length; i++) {

                if (intervalArrayIndex !== i && augmentedIntervals[i].length === 2) {
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
                        console.error('in here')
                        const newInterval = [lowest, highest]

                        augmentedIntervals[intervalArrayIndex].push(null)
                        augmentedIntervals[i].push(null)

                        //insert new interval
                        augmentedIntervals.push(newInterval)
                        hasOverlapped = false
                        break
                    }
                }
            }
        }

    }

    rangeAns = augmentedIntervals.reduce((acc, numArr) => {
        if (numArr.length !== 2) return acc
        const diff = numArr[1] - numArr[0]

        acc += diff
        return acc
    }, 0)


    return rangeAns


    // psudo code
    // for each range go through all other ranges
    // if on range overlap then combine and then reset and go again
    // if no overlap in whole array then loop through and see which range has most
}


async function sumIntervalsV3(intervals) {
    let ansArr = []
    let augmentedIntervals = [...intervals].sort((a, b) => a[1] - b[1])
    let changes = true

    while (changes) {
        const startAnsLength = ansArr.length
        augmentedIntervals = [...ansArr]
        ansArr = []


        for (let i = 0; i < augmentedIntervals.length; i++) {

            const currentHighNumber = augmentedIntervals?.[i]?.[1]
            const nextLowNumber = augmentedIntervals?.[i + 1]?.[0]

            // combonation
            if ((augmentedIntervals.length - 1) !== i && currentHighNumber > nextLowNumber) {
                const nextHighNumber = augmentedIntervals[i + 1][1]
                const currentLowNumber = augmentedIntervals[i][0]
                augmentedIntervals.splice((i + 1), 1, [Math.min(currentLowNumber, nextLowNumber), nextHighNumber])
                ansArr.push()
            } else {
                ansArr.push(augmentedIntervals[i])
            }
        }

        console.error(ansArr)

        console.error('startAnsLength', startAnsLength)

        console.error('ansArr.length', ansArr.length)


        if (startAnsLength !== 0 && startAnsLength === ansArr.length) changes = false

        await new Promise(r => setTimeout(r, 2000));
    }


    return ansArr.reduce((acc, numArr) => {
        const diff = numArr[1] - numArr[0]

        acc += diff
        return acc
    }, 0)
}

console.error(sumIntervalsV3([
    [1, 5],
    [1, 6],
    [5, 11],
    [16, 19],
    [10, 20]
]))


// get list of all highest numbers

// loop through high numbers
// if 1 high number i lower than another and the high number is higher or eual to the lower number