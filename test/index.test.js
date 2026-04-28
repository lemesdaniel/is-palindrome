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

const FRASES = [
  'A mala nada na lama',
  'Socorram-me, subi no ônibus em Marrocos',
  'Anotaram a data da maratona',
  'A torre da derrota',
  'O lobo ama o bolo',
  'A diva em Argel alegra-me a vida',
  'Luz azul',
  'Após a sopa',
  'A cara rajada da jararaca',
  'A sacada da casa',
];

for (const frase of FRASES) {
  test(`reconhece "${frase}" como palíndromo`, () => {
    assert.equal(isPalindrome(frase), true);
  });
}

test('é case-insensitive', () => {
  assert.equal(isPalindrome('ARARA'), true);
  assert.equal(isPalindrome('Reviver'), true);
});

test('ignora pontuação e espaços', () => {
  assert.equal(isPalindrome('a-mala-nada-na-lama'), true);
});

test('ignora acentos', () => {
  assert.equal(isPalindrome('Apos a sopa'), true);
});
