import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const firstThree = source.pipe(take(3));

firstThree.subscribe((result) => console.log(result));
// Output: 0, 1, 2 (apenas os três primeiros valores do intervalo são emitidos)
