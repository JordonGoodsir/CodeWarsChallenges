function rot13(str) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let alphabetCapital = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

    return str.split('').reduce((ans, letter) => {
        const normalLetter = alphabet.includes(letter)
        const capitalLetter = alphabetCapital.includes(letter)

        if (normalLetter || capitalLetter) {
            const alphabetUsed = normalLetter ? alphabet : alphabetCapital
            const letterIndex = alphabetUsed.findIndex((let) => let === letter)

            let codeIndex = letterIndex + 13

            if (codeIndex > (alphabet.length - 1)) {
                codeIndex -= alphabet.length
            }

            ans += alphabetUsed[codeIndex]

        } else ans += letter

        return ans
    }, '')

}

// rot13("EBG13 rknzcyr.") 
// == "ROT13 example.";