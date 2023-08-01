import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject<number>(0);

behaviorSubject.subscribe((value) => console.log('Observador 1:', value));

behaviorSubject.next(1); // Output: Observador 1: 1
behaviorSubject.next(2); // Output: Observador 1: 2

behaviorSubject.subscribe((value) => console.log('Observador 2:', value));
// Output: Observador 2: 2 (O último valor emitido é 2, então o Observador 2 recebe o valor mais recente)

behaviorSubject.next(3);
// Output: Observador 1: 3
//         Observador 2: 3

behaviorSubject.complete();

// Observações:

// O BehaviorSubject é iniciado com um valor padrão de 0 (no exemplo acima).
// Os observadores subsequentes recebem o último valor emitido, além dos valores futuros.
