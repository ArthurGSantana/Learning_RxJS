import { interval } from 'rxjs';
import { skip } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const skipThree = source.pipe(skip(3));

skipThree.subscribe((result) => console.log(result));
// Output: 3, 4, 5, 6, ... (ignora os primeiros 3 valores do intervalo)
