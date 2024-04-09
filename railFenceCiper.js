function encodeRailFenceCipher(string, numberRails) {

    let characterDistance = numberRails

    if(numberRails > 2) { 

        characterDistance = (numberRails % 2) ? characterDistance + 1 : characterDistance + 2
    }

    // let characterDistance = numberRails > 2 ? numberRails + 1 : numberRails


    // console.error(characterDistance)
    let completeEncryption = ''
    const splitString = string.split('')

    for (let railNumber = 0; railNumber < numberRails; railNumber++) {
        console.error(characterDistance)
        // completeEncryption += splitString.filter((v, i) => (i - railNumber) % characterDistance === 0).join("")
        completeEncryption += splitString.filter((v, i) => (i - railNumber) % characterDistance === 0).join("")


        if(numberRails > 2) {
    
        if(numberRails % 2) { 
            // odd
            if(railNumber === 0) characterDistance -= 2
            else characterDistance = ((railNumber + 1) % 2) ? characterDistance - 2  : characterDistance + 2
        } else { 
            // even
            characterDistance -= 2
        } 
    }
    }


    return completeEncryption
}

function decodeRailFenceCipher(string, numberRails) {
    // code
}


decodeRailFenceCipher("Hooel,Wr!l d", 3)

// h        o      o         
//    e   l   ,   W   r    !
//      l                d

// encodeRailFenceCipher("Hello, World!", 3)
// "Hoo!el,Wrdl l"


// encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3)

encodeRailFenceCipher("HelloMe", 4)
// "heeMlol"






// WEAREDISCOVEREDFLEEATONCE

// W       E       C       R       L       T       E   4
//   E   R   D   S   O   E   E   F   E   A   O   C     2
//     A       I       V       D       E       N       4


// ("Hello, World!", 3), "Hoo!el,Wrdl l");

// h        o       o         !
//    e   l   ,   W   r    d
//      l                l



// ("HelloMe), "heeMlol");

// H            e       6
//   e       M          4 
//     l   o            2
//       l              0
 
// hoo!else,Wrdl l