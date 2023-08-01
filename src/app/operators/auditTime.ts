import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';

const clickEvent = fromEvent(document, 'click');
const lastClick = clickEvent.pipe(auditTime(2000));

lastClick.subscribe((event) => console.log('Último clique', event));
// O último clique é emitido a cada 2 segundos.
