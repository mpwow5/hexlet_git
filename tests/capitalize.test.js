import { capitalize } from "../src/capitalize.js";


asserts.deepEqual(capitalize('hello') === 'Hello');
asserts.deepEqual(capitalize('') === '');