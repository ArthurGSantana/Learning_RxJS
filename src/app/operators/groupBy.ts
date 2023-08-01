import { from } from 'rxjs';
import { groupBy, mergeMap } from 'rxjs/operators';

const numbers = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const groups = numbers.pipe(
  groupBy((number) => (number % 2 === 0 ? 'par' : 'impar')),
  mergeMap((group) => group.toArray())
);

groups.subscribe((result) => console.log(result));
// Output: [1, 3, 5, 7, 9] (grupo 'impar'), [2, 4, 6, 8, 10] (grupo 'par')
// Os números são agrupados em grupos distintos com base em sua paridade.
