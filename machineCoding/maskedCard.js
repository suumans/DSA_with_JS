/**
 * console.log(maskify('4556364607935616'))
 * // should return '4############616'
 * console.log(maskify('6460-7935-6167-5397'))
 * // should return '4####-####-####-5397'
 * console.log(maskify('sumanIsGreat'))
 * // should return 'sumanIsGreat'
 */

function maskify(cardNumber) {
    if(typeof cardNumber === 'number') {
        cardNumber = cardNumber.toString()
    }
    // optional
    if(cardNumber.length <= 6) {
        return cardNumber
    }

    const firstChar = cardNumber[0]
    const lastFourChars = cardNumber.slice(-4)

    let maskedSection = ''

    for (let i = 0; i < cardNumber.length - 4; i++) {
        const char = cardNumber[i]
        maskedSection += isNaN(parseInt(char)) ? char : '#'
    }

    return firstChar + maskedSection + lastFourChars
}