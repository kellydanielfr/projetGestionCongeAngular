import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salarie } from '../model/salarie';

@Injectable({
  providedIn: 'root'
})
export class SalarieService {
  private url: string = 'http://localhost:8080/conge/api/salarie';
  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + sessionStorage.getItem('tokenId'),
    });
  }

  public allSalarie(): Observable<Salarie[]> {
    return this.http.get<Salarie[]>(this.url, { headers: this.httpHeaders });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id, {
      headers: this.httpHeaders,
    });
  }

  public update(salarie: Salarie): Observable<Salarie> {
    return this.http.put<Salarie>(`${this.url}/${salarie.id}`, salarie, {
      headers: this.httpHeaders,
    });
  }

  public insert(salarie: Salarie): Observable<Salarie> {
    const o = {
      nom: salarie.nom,
      mail: salarie.mail,
      service: salarie.service,
      role:salarie.role,
    };
    return this.http.post<Salarie>(this.url, o, { headers: this.httpHeaders });
  }
}
