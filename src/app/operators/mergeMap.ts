import { from, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const items = from(['item1', 'item2', 'item3']);
const saveItem = (item) =>
  this.http.post('https://api.example.com/items', { item });

items
  .pipe(mergeMap((item) => saveItem(item)))
  .subscribe((response) => console.log(response));
// Cada item do array é enviado individualmente ao servidor, retornando a resposta para cada um.
