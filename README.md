# @lemesdaniel/is-palindrome

[![npm version](https://img.shields.io/npm/v/@lemesdaniel/is-palindrome.svg)](https://www.npmjs.com/package/@lemesdaniel/is-palindrome)
[![CI](https://github.com/lemesdaniel/is-palindrome/actions/workflows/ci.yml/badge.svg)](https://github.com/lemesdaniel/is-palindrome/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Detector de palíndromos em português com normalização Unicode embutida. Zero dependências.

## Instalação

```bash
npm install @lemesdaniel/is-palindrome
```

## Uso

```js
const isPalindrome = require('@lemesdaniel/is-palindrome');

isPalindrome('arara');                              // true
isPalindrome('A mala nada na lama');                // true
isPalindrome('Socorram-me, subi no ônibus em Marrocos'); // true
isPalindrome('javascript');                         // false
```

## API

### `isPalindrome(input)`

Verifica se `input` é um palíndromo reconhecido.

- **`input`** `{string}` — texto a ser verificado
- **Retorno** `{boolean}`
- **Lança** `{TypeError}` se `input` não for string

A entrada passa por um pipeline de normalização antes da verificação:

1. Normalização Unicode NFKD
2. Remoção de marcas combinantes (acentos, til, cedilha)
3. Remoção de caracteres não-alfanuméricos
4. Conversão para minúsculas

Isso permite que as três entradas a seguir sejam tratadas de forma equivalente:

```js
isPalindrome('A mala nada na lama'); // true
isPalindrome('a-mala-nada-na-lama'); // true
isPalindrome('AMalaNadaNaLama');     // true
```

## Contributing

1. Fork
2. Crie um branch (`git checkout -b feature/minha-mudanca`)
3. Commit (`git commit -am 'feat: descrição'`)
4. Push (`git push origin feature/minha-mudanca`)
5. Abra um Pull Request

## License

MIT © Daniel Lemes
