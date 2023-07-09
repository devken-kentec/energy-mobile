
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FrequenciaService {

  private readonly API = `${environment.API}/atendeFacil/api/agendamento`;

  constructor(private http: HttpClient) { }

  loadById(id){
    return this.http.get(`${this.API}/busca/${id}`).pipe(
        take(1)
    );
  }
}
