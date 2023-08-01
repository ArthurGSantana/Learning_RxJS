import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

const source = interval(1000); // Emite valores a cada segundo.
const withSideEffect = source.pipe(
  tap((value) => console.log('Valor emitido:', value))
);

withSideEffect.subscribe();
// A cada segundo, o valor emitido é exibido no console sem alterar o fluxo de valores.
