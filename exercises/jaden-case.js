'use strict'


/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(phrase) {
    let tabtempo=[];
    var arrayOfStrings = phrase.split(' ');
    for (var i = 0; i < arrayOfStrings.length; i++) {
       arrayOfStrings[i]=arrayOfStrings[i].charAt(0).toUpperCase()+arrayOfStrings[i].substring(1);
     
    }

    return arrayOfStrings.join(' ');

}

//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('how are you ?'), 'How Are You ?')
// End of tests */
