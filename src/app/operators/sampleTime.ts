import { interval } from 'rxjs';
import { sampleTime } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const sampled = source.pipe(sampleTime(2000));

sampled.subscribe((result) => console.log(result));
// Output: (Após 2 segundos) 1, 3, 5, 7, ...
// O último valor emitido a cada 2 segundos é emitido.
