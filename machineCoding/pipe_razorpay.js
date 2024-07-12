/**
 * Implement a utility function called pipe that accepts a series of function as arguments. The pipe
 * function should return a new function that, when called, process an initial input by passing it through
 * each of the functions in sequence, where the output of the previous function becomes the input to the next.
 */

function pipe(...fns) {
    return function (initialValur) {
        return fns.reduce((acc, fn) => fn(acc), initialValur)
    }
}

// example usage
const getName = (object) => object.name
const upperCase = (string) => string.toUpperCase()
const slice = (string) => string.slice(0, 3)

const method = pipe(getName, upperCase, slice)
const value = method({ name: 'suman' })

console.log(value)