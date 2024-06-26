// "ace" is the subsequent of "abcde" while aec is not

let isSubsequent = function (s, p) {
    let sIndex = 0

    for (const char of p) { // for each character in p
        if (sIndex === s.length) break  // if sIndex is equal to the length of s, break the loop
        if (s[sIndex] === char) sIndex++  // if the current character in s is equal to the current character in p, increment sIndex
    }

    return sIndex === s.length  // return true if sIndex is equal to the length of s
        
}
