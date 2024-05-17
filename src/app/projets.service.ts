import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../../Data_types/Projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  url = 'http://localhost:3000/projets';

  constructor(private http: HttpClient) { }

  getProjets(): Observable<Projet[]> {
    return this.http.get<Projet[]>(this.url);
  }

  getProjetById(id: number): Observable<Projet> {
    return this.http.get<Projet>(`${this.url}/${id}`);
  }
}
