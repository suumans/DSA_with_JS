/*
 * Operation 1: swap any two existing characters.
 * For Example: abcde -> aecdb
 * 
 * Operation 2: Transform every occurrence of one existing character into another existing character, 
 * and do the same with the other character.
 * 
 * For Example: aacabb -> bbcbaa ( all a's are replaced by b's and all b's are replaced by a's )
 */


// 1. length
// 2. frequencyMap1 & frequencyMap2
// 3. check KEYS if frequencyMap1 === frequencyMap2
// 4. haveSameCharacters
// 5. values -> sort -> Array
// 6. array -> string -> compare


let closeStrings = function(word1, word2) {

    if (word1.length !== word2.length) {
        return false
    }

    let frequencyMap1 = {}
    let frequencyMap2 = {}

    for (const character of word1) {
        frequencyMap1.set(character, (frequencyMap1.get(character) || 0) + 1)  // set the character as a key and increment the count
    }

    for (const character of word2) {
        frequencyMap2.set(character, (frequencyMap2.get(character) || 0) + 1)
    }

    const character1 = new set(frequencyMap1.keys())
    const character2 = new set(frequencyMap2.keys())

    if (character1.size !== character2.size) {
        return false
    }

    const haveSameCharacters = [...character1].every(char => character2.has(char))

    if (!haveSameCharacters) return false

    const sortedFrequencyMap1 = Array.from(frequencyMap1.values()).sort((a, b) => a - b)
    const sortedFrequencyMap2 = Array.from(frequencyMap2.values()).sort((a, b) => a - b)

    const areFrequencyIdentical = sortedFrequencyMap1.join(',') === sortedFrequencyMap2.join(',')

    if (!areFrequencyIdentical) return false

    return true
}