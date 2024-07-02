import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Projet } from '../../../Data_types/Projets_types';

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  //observable to notify the components that the data has changed
  private projetsSubject = new BehaviorSubject<Projet[]>([]);
  projets$ = this.projetsSubject.asObservable();


  url = "https://filrougeback.azurewebsites.net";
  constructor(private http: HttpClient) { }


  //Projets requests
  getProjets() {
    this.http.get<Projet[]>(`${this.url}/projets`).subscribe(
      projets => this.projetsSubject.next(projets)
    );
    return this.projets$;
  }

  getProjetById(id: number) : Observable<Projet>{
    return this.http.get<Projet>(`${this.url}/projets/${id}`);
  }

  deleteProjet(id: number) {
    this.http.delete(`${this.url}/projets/${id}`).subscribe(
      () => this.getProjets()
    );
  }

  createProjet(projet: Projet) {
    this.http.post<Projet>(`${this.url}/projets`, projet).subscribe(
      () => this.getProjets()
    );
    return 
  }

  updateProjet(id: number, projet: Projet) {
    this.http.put<Projet>(`${this.url}/projets/${id}`, projet).subscribe(
      () => this.getProjets()
    );
  }
}
