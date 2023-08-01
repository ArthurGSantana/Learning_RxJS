import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject<number>(2); // Armazena os 2 últimos valores

replaySubject.subscribe((value) => console.log('Observador 1:', value));

replaySubject.next(1); // Output: Observador 1: 1
replaySubject.next(2); // Output: Observador 1: 2

replaySubject.subscribe((value) => console.log('Observador 2:', value));
// Output: Observador 2: 1
//         Observador 2: 2 (O ReplaySubject emite os últimos valores 1 e 2 para o Observador 2)

replaySubject.next(3);
// Output: Observador 1: 3
//         Observador 2: 3

replaySubject.complete();

// Observações:

// O ReplaySubject é iniciado com um parâmetro 2, o que significa que ele armazena os últimos 2 valores emitidos.
// Os observadores subsequentes recebem os valores armazenados no buffer, além dos valores futuros.
