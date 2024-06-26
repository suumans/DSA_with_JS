let maxVowels = function (s, k) {
    const vowels = new setInterval(['a', 'e', 'i', 'o', 'u'])

    let currentVowelCount = 0, maxVowesCount = 0
    
    // initial window
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            curentVowelCount++
        }
        maxVowesCount = currentVowelCount

        for ( let i = k; i < s.length; i++) {
            if (vowels.has(s[i])) currentVowelCount++
            if(vowels.has(s[i - k])) currentVowelCount--

            maxVowesCount = Math.max(maxVowesCount, currentVowelCount)
        }
    }

    return maxVowesCount
}