let mergeAlternately = (word1, word2) => {
    let merged = ""
    let i = 0
    let j = 0

    while (i < word1.length && j < word2.length) { // loop until we reach the end of both words
        merged += word1[i]  // add character from word1
        merged += word2[j]  // add character from word2

        i++  // increment index of word1
        j++  // increment index of word2

    }

    // add remaining characters of word1

    while (i < word1.length) {
        merged += word1[i]  
        i++
    }

    // add remaining characters of word2

    while (j < word2) {
        merged += word2[j]
        j++
    }

    return merged
}