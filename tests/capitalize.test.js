import { capitalize } from "../src/capitalize.js";

if (capitalize('hello') !== 'Hello') {
    throw new Error('Error!');
}

if (capitalize('') !== '') {
    throw new Error('Функция работает неверно!');
  }

console.log('Success!')