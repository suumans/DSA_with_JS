let gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1)
    return ""

    function gcd(a, b) {
        if(b.length === 0) {
            return a
        }
        
        return gcd(b, a.slice(0, a.length % b.length))
    }

    return gcd(str1, str2)
}

gcdOfStrings()


/**
 * if (str1 + str2 !== str2 + str1) return ""
 * let a = str1.length
 * let b = str2.length
 * 
 * while (b) {
 *     let temp = b
 *     b = a % b
 *     a = temp
 * }
 * 
 * return str1.substring(0, a)
 */

/** 
let a = "ABCABCABC"
let b = "ABC"

let result = a.slice(0, a.length % b.length)

console.log(a.length % b.length)
console.log(result)

*/