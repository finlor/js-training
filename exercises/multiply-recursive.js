'use strict'


let result = 0;
let result2 = 0;
let result3 = 0;
function mult(x, y) {
    if (x > 0) {
        result = result + y;
        return mult(x - 1, y);
    }

    else {
        return result;
    }
}
function mult2(x, y) {
    if (x < 0) {
        result2 = result2 - y;
        return mult2(x + 1, y);
    }
    else {
        return result2;
    }
}

function mult3(x, y) {
    if (x > 0) {
        result3 = result3 + y;
        return mult3(x - 1, y);
    }

    else {
        return result3;
    }
}
function multiply(x, y) {
    if ((x == 0) || (y == 0)) {
        return 0;

    }

    else if (((x > 0) && (y > 0))) {
        return (mult(x, y))

    }

    else if (((x < 0) && (y < 0))) {
        return (mult2(x, y));

    }

    else {
        return (mult3(x, y));

    }
}

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
