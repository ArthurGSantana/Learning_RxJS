import { from, throwError, timer } from 'rxjs';
import { mergeMap, retryWhen, delayWhen } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const request = this.http.get('https://api.example.com/data').pipe(
  mergeMap((response) => {
    if (Math.random() < 0.7) {
      // Simulando erro em 70% das vezes.
      return throwError('Erro na requisição');
    } else {
      return from([response]);
    }
  }),
  retryWhen((errors) => errors.pipe(delayWhen(() => timer(2000))))
);

request.subscribe(
  (result) => console.log('Sucesso:', result),
  (error) => console.error('Erro:', error)
);
// Em caso de erro, a requisição é reexecutada após 2 segundos.
