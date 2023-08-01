import { fromEvent } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const searchInput = document.getElementById('searchInput');
const searchResult = fromEvent(searchInput, 'input').pipe(
  debounceTime(500), // Esperar 500ms após o último evento de input.
  distinctUntilChanged(), // Filtro para evitar pesquisas duplicadas.
  switchMap((event) =>
    this.http.get(`https://api.example.com/search?q=${event.target.value}`)
  )
);

searchResult.subscribe((result) => console.log(result));
// Quando o usuário digitar, será feita uma única requisição de busca após 500ms após o último input.
