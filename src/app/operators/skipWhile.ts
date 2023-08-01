import { interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const skipUntilValue = source.pipe(skipWhile((value) => value <= 3));

skipUntilValue.subscribe((result) => console.log(result));
// Output: 4, 5, 6, 7, ... (ignora os valores até que o valor 4 seja emitido)
