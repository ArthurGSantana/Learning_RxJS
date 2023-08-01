import { from, throwError } from 'rxjs';
import { mergeMap, retry } from 'rxjs/operators';
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
  retry(3) // Tentar fazer a requisição novamente por até 3 vezes em caso de erro.
);

request.subscribe(
  (result) => console.log('Sucesso:', result),
  (error) => console.error('Erro:', error)
);
// Em caso de erro, a requisição é reexecutada até 3 vezes antes de emitir o erro final.
