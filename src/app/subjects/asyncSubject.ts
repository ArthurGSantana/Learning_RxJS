import { AsyncSubject } from 'rxjs';

const asyncSubject = new AsyncSubject<number>();

asyncSubject.subscribe((value) => console.log('Observador 1:', value));

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

asyncSubject.subscribe((value) => console.log('Observador 2:', value));
// Output: (Nenhum valor é emitido ainda)

asyncSubject.complete();
// Output: Observador 1: 3
//         Observador 2: 3 (O último valor emitido é 3, então ambos os observadores recebem esse valor)

// Observações:

// O AsyncSubject só emite o último valor emitido (3) quando é concluído com complete().
// Os observadores subsequentes recebem o último valor emitido, mas apenas quando o Subject é concluído.
