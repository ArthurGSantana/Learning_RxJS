import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

const source = interval(1000); // Emite valores de 0 em 0.1s.
const valuesLessThanFive = source.pipe(takeWhile((value) => value < 5));

valuesLessThanFive.subscribe((result) => console.log(result));
// Output: 0, 1, 2, 3, 4 (valores menores que 5 são emitidos; quando o valor 5 é atingido, a emissão é encerrada)
