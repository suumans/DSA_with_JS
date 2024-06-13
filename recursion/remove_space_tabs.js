// Task is to remove all the spaces and tabs from a string. This includes the character " " and the character "\t" from the string.

function removeTAS(inputString){
    let restlt = ""
    for(let i = 0; i < inputString.length; i++){
        let char = inputString[i]
        if(char !== " " && char !== "\t"){
            restlt += char
        }
    }
    return restlt
}

function recursiveRTAS(inputString){
    if(inputString === 0){
        return ""
    }

    const firstChar = inputString[0]
    const restOfString = inputString.slice(1)

    if(firstChar !== " " && firstChar !== "\t"){
        return recursiveRTAS(restOfString)
    } else {
        return firstChar + recursiveRTAS(restOfString)
    }
}