import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private url: string = 'http://localhost:8080/conge/api/service';
  private httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + sessionStorage.getItem('tokenId'),
    });
  }

  public allService(): Observable<Service[]> {
    return this.http.get<Service[]>(this.url, { headers: this.httpHeaders });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id, {
      headers: this.httpHeaders,
    });
  }

  public update(service: Service): Observable<Service> {
    return this.http.put<Service>(`${this.url}/${service.id}`, service, {
      headers: this.httpHeaders,
    });
  }

  public insert(service: Service): Observable<Service> {
    const o = {
      libelle: service.libelle,
    };
    return this.http.post<Service>(this.url, o, { headers: this.httpHeaders });
  }

  public findById(id: number): Observable<Service> {
    return this.http.get<Service>(`${this.url}/${id}`);
  }
}
