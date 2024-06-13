// find gcd of two numbers
// input: 42 and 18
// output: 6
// 42 divisors are 1, 2, 3, 6, 7, 14, 21, 42
// 18 divisors are 1, 2, 3, 6, 9, 18
// gcd of 42 and 18 = 6

function gcd(num1, num2) {
    if (num1 == num2) {
        return num1
    } else if (num1 > num2) {
        return gcd(num1 - num2, num2)
    } else {
        return gcd(num1, num2 - num1)
    }
}