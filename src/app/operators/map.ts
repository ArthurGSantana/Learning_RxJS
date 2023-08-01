import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

const source = interval(1000); // Emite valores de 0 em 0.1s.
const doubledValues = source.pipe(map((value) => value * 2));

doubledValues.subscribe((result) => console.log(result));
// Output: 0, 2, 4, 6, 8, 10, 12, 14, ... (valores do intervalo multiplicados por 2)
