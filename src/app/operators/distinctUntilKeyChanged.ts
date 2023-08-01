import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

const data = from([
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Charlie' },
]);
const uniqueNames = data.pipe(distinctUntilKeyChanged('name'));

uniqueNames.subscribe((result) => console.log(result));
// Output: { id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 4, name: 'Charlie' }
// Apenas objetos com a chave 'name' diferente do valor anterior são emitidos.
