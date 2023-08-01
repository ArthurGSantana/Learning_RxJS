import { interval } from 'rxjs';
import { delay } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const delayed = source.pipe(delay(2000));

delayed.subscribe((result) => console.log(result));
// Output: (Após 2 segundos) 0, 1, 2, 3, 4, 5, ...
// Os valores do intervalo são emitidos com um atraso de 2 segundos.
