import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const clickEvent = fromEvent(document, 'click');
const untilClick = source.pipe(takeUntil(clickEvent));

untilClick.subscribe((result) => console.log(result));
// Os valores do intervalo são emitidos até que um evento de clique seja disparado na página.
