const test = require('node:test');
const assert = require('node:assert/strict');
const isPalindrome = require('../index.js');

test('reconhece "arara" como palíndromo', () => {
  assert.equal(isPalindrome('arara'), true);
});
