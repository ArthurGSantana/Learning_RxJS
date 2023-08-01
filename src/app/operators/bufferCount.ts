import { interval } from 'rxjs';
import { bufferCount } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const buffered = source.pipe(bufferCount(3));

buffered.subscribe((result) => console.log(result));
// Output: [0, 1, 2], [3, 4, 5], [6, 7
