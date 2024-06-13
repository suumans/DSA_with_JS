
import { recursiveFibonacci } from './fibonacci.js';
// const recursiveFibonacci = require('./path_to_recursiveFibonacci');

describe('recursiveFibonacci', () => {
    test('returns 0 for the 0th position', () => {
        expect(recursiveFibonacci(0)).toBe(0);
    });

    test('returns 1 for the 1st position', () => {
        expect(recursiveFibonacci(1)).toBe(1);
    });

    test('returns 1 for the 2nd position', () => {
        expect(recursiveFibonacci(2)).toBe(1);
    });

    test('returns 2 for the 3rd position', () => {
        expect(recursiveFibonacci(3)).toBe(2);
    });

    test('returns 3 for the 4th position', () => {
        expect(recursiveFibonacci(4)).toBe(3);
    });

    test('returns 5 for the 5th position', () => {
        expect(recursiveFibonacci(5)).toBe(5);
    });

    test('returns 8 for the 6th position', () => {
        expect(recursiveFibonacci(6)).toBe(8);
    });

    test('handles negative input', () => {
        expect(recursiveFibonacci(-1)).toBe(undefined);
    });

    test('handles non-integer input', () => {
        expect(recursiveFibonacci(3.5)).toBe(undefined);
    });
});
