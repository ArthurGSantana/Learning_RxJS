import { interval } from 'rxjs';
import { zip } from 'rxjs/operators';

const interval1 = interval(1000); // Emite valores a cada segundo.
const interval2 = interval(1500); // Emite valores a cada 1.5 segundos.

const combined = zip(interval1, interval2);

combined.subscribe((result) => console.log(result));
// Output: [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], ...
// Os valores de cada intervalo são combinados em um array.
