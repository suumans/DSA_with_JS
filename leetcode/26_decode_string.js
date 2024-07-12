
// "3[a]2[bc]"
let decodeString = function (s) {
    let stack = []
    let currentNum = 0
    let currentStr = ""

    for (const char of s) {
        if (char >= "0" && char <= "9") {
            currentNum = currentNum * 10 + Number(char)   // or (char - "0")
        } else if (char === "[") {
            stack.push([currentNum, currentStr])
            currentNum = 0
            currentStr = ""
        } else if (char === "]") {
            //let [num, str] = stack.pop()
            let prevStr = stack.pop()
            let repeatTimes = stack.pop()

            currentStr = prevStr + currentStr.repeat(repeatTimes)
        } else {
            currentStr += char
        }
    }

    return currentStr
}