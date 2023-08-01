import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

const numbers = from([1, 2, 3, 4, 5]);
const evenNumbers = numbers.pipe(filter((number) => number % 2 === 0));

evenNumbers.subscribe((result) => console.log(result));
// Output: 2, 4 (apenas
