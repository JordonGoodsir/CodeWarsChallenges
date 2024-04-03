

function orderWeight(strng) {

return strng.trim().split(" ").sort((a, b) =>  (a.split('').reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0) - b.split('').reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)) ||  a.localeCompare(b)).join(' ')
}

console.error(orderWeight("1 200 2 4 4 6 6 7 7 18 27 72 81 9 91"))

// 1 2 200 4 4 6 6 7 7 18 27 72 81 9 91