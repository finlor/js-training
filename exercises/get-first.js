'use strict'

function getFirst(x) {

    return (x[0])
}
/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 */

// Your code :

//* Begin of tests
const assert = require('assert')

assert.strictEqual(getFirst([2, 42]), 2)
assert.strictEqual(getFirst(['pouet', 4, true]), 'pouet')
assert.strictEqual(getFirst([getFirst]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
