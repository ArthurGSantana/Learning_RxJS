import { forkJoin, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const request1 = this.http
  .get('https://api.example.com/data/1')
  .pipe(delay(1000));
const request2 = this.http
  .get('https://api.example.com/data/2')
  .pipe(delay(2000));
const request3 = this.http
  .get('https://api.example.com/data/3')
  .pipe(delay(1500));

forkJoin([request1, request2, request3]).subscribe((results) =>
  console.log(results)
);
// Todas as requisições são feitas em paralelo, e o resultado é um array com as respostas.
