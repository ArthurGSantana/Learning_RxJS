import { fromEvent } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const clickEvent = fromEvent(document, 'click');
const request = clickEvent.pipe(
  exhaustMap(() => this.http.get('https://api.example.com/data'))
);

request.subscribe((response) => console.log(response));
// Cada clique só dispara uma requisição se não houver outras requisições pendentes.
