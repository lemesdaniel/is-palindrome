const test = require('node:test');
const assert = require('node:assert/strict');
const isPalindrome = require('../index.js');

const PALAVRAS = [
  'arara', 'asa', 'ovo', 'radar', 'reviver', 'anilina',
  'osso', 'mirim', 'salas', 'somamos', 'reconhecer', 'rotor', 'level',
];

for (const palavra of PALAVRAS) {
  test(`reconhece "${palavra}" como palíndromo`, () => {
    assert.equal(isPalindrome(palavra), true);
  });
}
