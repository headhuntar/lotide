const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 4], [1, 2, 4]), true); // => should PASS
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true) // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false) // => false
