
// function getPINs(observed) {
//     // TODO: This is your job, detective!

//     const matrix = [
//         ['1', '2', '3'],
//         ['4', '5', '6'],
//         ['7', '8', '9'],
//         [undefined, '0', undefined]
//     ]

//     const allPossabilities = []

//     const splitObserved = observed.split('')

//     for (let i = 0; i <= splitObserved.length - 1; i++) {

//         // observed coords
//         let x = undefined
//         let y = undefined

//         let index = 0

//         while (!x || !y) {
//             const foundXIndex = matrix[index].findIndex((val) => val === splitObserved[i])

//             if (foundXIndex !== -1) {
//                 y = index
//                 x = foundXIndex
//                 break
//             }

//             index += 1
//         }

//         // get all possible numbers for single digit
//         let possabilities = [splitObserved[i]]

//         // top
//         const top = matrix?.[y - 1]?.[x]
//         if (top) {
//             possabilities.push(top)
//         }

//         // right
//         const right = matrix?.[y]?.[x + 1]

//         if (right) {
//             possabilities.push(right)
//         }
//         // bottom 
//         const bottom = matrix?.[y + 1]?.[x]
//         if (bottom) {
//             possabilities.push(bottom)
//         }
//         // left
//         const left = matrix?.[y]?.[x - 1]
//         if (left) {
//             possabilities.push(left)
//         }

//         allPossabilities.push(possabilities)
//     }

//     if (allPossabilities.length === 1) return allPossabilities[0]


//     const results = allPossabilities.reduce((result, pos) => {

//         for (var x in pos) {
//             for (var y in result) {
//                 result.push(pos[x] + result[y]);
//             }
//         }

//         return result
//     }, [])

//     console.error('res here', results)

//     // return pins.reduce(function (a, b) {
//     //     var result = [];
//     //     for (var x in a) {
//     //         for (var y in b) {
//     //             result.push(a[x] + b[y]);
//     //         }
//     //     }
//     //     return result;
//     // });

// }


// getPINs('11')








// function getPINss(observed) {
//     var observed = observed.split('');
//     var pins = [];
//     var va = {
//         0: ["0", "8"],
//         1: ["1", "2", "4"],
//         2: ["1", "2", "3", "5"],
//         3: ["2", "3", "6"],
//         4: ["1", "4", "5", "7"],
//         5: ["2", "4", "5", "6", "8"],
//         6: ["3", "5", "6", "9"],
//         7: ["4", "7", "8"],
//         8: ["0", "5", "7", "8", "9"],
//         9: ["6", "8", "9"]
//     };

//     for (var i in observed) {
//         var possible = va[observed[i]];
//         pins.push(possible);
//     }


//     return pins.reduce(function (a, b) {

//         let result = [];
//         console.error(a)
//         for (let x in a) {

//             console.error(a[x])
//             for (let y in b) {
//                 result.push(a[x] + b[y]);
//             }
//         }

//         return result;

//     });
// }

// getPINss('823')

// function dirReduc(arr) {

//     const directionValues = {
//         'WEST': -1,
//         'EAST': 1,
//         'SOUTH': -1,
//         'NORTH': 1
//     }

//     const test = arr.reduce((coordinates, direction) => {
//         if (['WEST', 'EAST'].includes(direction)) {
//             coordinates.x += directionValues[direction]
//         } else coordinates.y += directionValues[direction]

//         return coordinates
//     }, { x: 0, y: 0 })


//     let directions = []

//     directions.push(new Array(Math.abs(test.x)).fill(test.x < 0 ? 'WEST' : 'EAST'))
//     directions.push(new Array(Math.abs(test.y)).fill(test.x < 0 ? 'SOUTH' : 'NORTH'))

//     return directions.flat()
// }


// function mix(s1, s2) {
//     // your code
//     // const cleanS1 = s1.replace(/\s[^A-Z]/g, '')
//     const cleanS1 = s1.replace(/[^a-z]/g, '').split('')
//     const cleanS2 = s2.replace(/[^a-z]/g, '').split('')

//     const allLetters = [cleanS1, cleanS2]
//     const sortedLetters = []


//     allLetters.forEach((element, index) => {
//         sortedLetters[index] = element.reduce((s1Letters, letter) => {
//             if (s1Letters[letter]) s1Letters[letter] += 1
//             else s1Letters[letter] = 1

//             return s1Letters
//         }, {})
//     });

//     const stringifyLetterCount = (identifier, letter, amount) => {
//         return `${identifier}:${Array(amount + 1).join(`${letter}`)}`
//     }

//     console.error()

//     const test = sortedLetters.reduce((ansString, letters, index) => {

//         const otherIndex = index ? index - 1 : index + 1

//         Object.keys(letters).forEach((letter) => {
//             const currentLetterVal = letters[letter]

//             if (currentLetterVal && currentLetterVal > 1) {

//                 const otherLetterVal = sortedLetters?.[otherIndex]?.[letter]
//                 if (!otherLetterVal) {
//                     ansString.push(stringifyLetterCount(index + 1, letter, letters[letter]))
//                 } else if (otherLetterVal === currentLetterVal) {
//                     ansString.push(stringifyLetterCount('=', letter, letters[letter]))

//                     delete sortedLetters[otherIndex][letter]
//                 } else if (currentLetterVal > otherLetterVal) {
//                     ansString.push(stringifyLetterCount(index + 1, letter, letters[letter]))

//                     delete sortedLetters[otherIndex][letter]
//                 } else {
//                     ansString.push(stringifyLetterCount(otherIndex + 1, letter, letters[letter]))

//                     delete sortedLetters[otherIndex][letter]
//                 }
//             }
//         })

//         return ansString

//     }, [])

//     console.error(test.sort((a, b) => (b.length - a.length || Number(b.charAt(0)) || 0) - (Number(a.charAt(0)) || 0)))
// }

// const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


// function mix(s1, s2) {

//     return alphabet
//         .map(char => {
//             const s1Count = s1.split('').filter(x => x === char).length,
//                 s2Count = s2.split('').filter(x => x === char).length,
//                 maxCount = Math.max(s1Count, s2Count);

//             return {
//                 char: char,
//                 count: maxCount,
//                 src: maxCount > s1Count ? '2' : maxCount > s2Count ? '1' : '='
//             };
//         }).filter(c => c.count > 1)
//         .sort((objA, objB) => objB.count - objA.count || (objA.src + objA.char > objB.src + objB.char ? 1 : -1))
//         .map(c => `${c.src}:${c.char.repeat(c.count)}`)
//         .join('/')
// }

// function findUniq(arr) {
//     const uniqueValueIndex = arr.map((word) => [...new Set(word.toLowerCase().split('').sort())].join('')).reduce((acc, word, index) => {
//         const currentLetterIndex = acc.findIndex((val) => val[word])

//         if (currentLetterIndex != -1) {
//             acc[currentLetterIndex][word] += 1
//             acc[currentLetterIndex].indexs.push(i = index)
//         } else acc.push({ [word]: 1, indexs: [index] })
//         return acc
//     }, []).find((val) => val.indexs.length === 1).indexs[0]

//     return arr[uniqueValueIndex]
// }

// findUniq(['Aac', 'aac', 'aaaaca', 'BbBbl', 'Acaaa', 'AaAcaAa', 'ca'])


const makeAcronym = (str) => {
    if (str.length > 30) {
        return str.split('-').reduce((acc, titlePart) => {

            if (!["the", "of", "in", "from", "by", "with", "and", "or", "for", "to", "at", "a"].includes(titlePart.toLowerCase())) {
                acc += titlePart.charAt(0).toUpperCase()
            }

            return acc

        }, '')
    } else return str.toUpperCase().split('-').join(' ')
}


function generateBC(url, separator) {

    const cleanUrl = url.trim().replace('//', '').split('/')
    const splitUrl = cleanUrl.filter((val) => val)
    
    const dotSplit = splitUrl[splitUrl.length - 1].split('.')

    if (dotSplit[0] === 'index') splitUrl.pop()

    return splitUrl.reduce((breadCrumb, urlSegment, urlSegmentIndex) => {

        const cleanSegment = urlSegment.replace(/\?(.*)|[.#].*/, '')

        if (urlSegmentIndex === splitUrl.length - 1) {
            // last
            const spanName = splitUrl.length > 1 ? makeAcronym(cleanSegment.replace(/\..*|#.*/, '')) : 'HOME'
            breadCrumb.push(`<span class="active">${spanName}</span>`)

        } else if (urlSegmentIndex === 0) {
            // first
            breadCrumb.push('<a href="/">HOME</a>')
        } else {
            // inbetween
            const betweenName = makeAcronym(cleanSegment)

            let href = ''
            let currentIndex = urlSegmentIndex

            while (currentIndex > 0) {
                href = splitUrl[currentIndex] + '/' + href

                currentIndex -= 1
            }

            breadCrumb.push(`<a href="/${href}">${betweenName}</a>`)
        }

        return breadCrumb

    }, []).join(separator)

}

console.error(generateBC('www.men/t/t-shirt', ' + '))



// Expected: &lt;span class="active"&gt;HOME&lt;/span&gt
// instead got: &lt;a href="/"&gt;HOME&lt;/a&gt



