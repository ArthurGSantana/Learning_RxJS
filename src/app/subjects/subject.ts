import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe((value) => console.log('Observador 1:', value));

subject.next(1); // Output: Observador 1: 1
subject.next(2); // Output: Observador 1: 2

subject.subscribe((value) => console.log('Observador 2:', value));

subject.next(3);
// Output: Observador 1: 3
//         Observador 2: 3

subject.complete();

// Observações:

// O primeiro observador (Observador 1) se inscreveu antes de emitirmos os valores, portanto, ele recebeu todos os valores emitidos após sua inscrição.
// O segundo observador (Observador 2) se inscreveu depois que os valores foram emitidos. Mesmo assim, ele recebeu o valor mais recente (3) e não os valores anteriores (1 e 2).
// O complete() é chamado para sinalizar que o Subject concluiu a emissão de valores.
