import { from } from 'rxjs';
import { distinct } from 'rxjs/operators';

const numbers = from([1, 2, 2, 3, 4, 4, 5]);
const uniqueNumbers = numbers.pipe(distinct());

uniqueNumbers.subscribe((result) => console.log(result));
// Output: 1, 2, 3, 4, 5 (valores distintos são emitidos, valores duplicados são ignorados)
