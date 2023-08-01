import { from } from 'rxjs';
import { partition } from 'rxjs/operators';

const numbers = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const [evenNumbers, oddNumbers] = numbers.pipe(
  partition((number) => number % 2 === 0)
);

evenNumbers.subscribe((result) => console.log('Par:', result));
// Output: 2, 4, 6, 8, 10 (números pares)
oddNumbers.subscribe((result) => console.log('Ímpar:', result));
// Output: 1, 3, 5, 7, 9 (números ímpares)
