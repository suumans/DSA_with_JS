// input: "hello"
// output: "holle"


let reverseVowels = function(s) {
    const vowels = "aeiouAEIOU"
    const characters = s.split("")

    let left = 0
    let right = characters.length - 1

    while (left < right) {
        while(left < right && vowels.indexOf(characters[left]) === -1) {
            left++
        }

        while(left < right && vowels.indexOf(characters[right]) === -1) {
            right--
        }
        
        // swap
        if (left < right) {
            const temp = characters[left]
            characters[left] = characters[right]
            characters[right] = temp
            left++
            right--
        }
    }

    return characters.join("")
}