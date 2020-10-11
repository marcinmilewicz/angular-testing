import { Injectable } from '@angular/core';
import { FullName } from './hello.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HelloApiService {
  constructor(private httpClient: HttpClient) {}

  getFullNames(name: string): Observable<FullName[]> {
    return this.httpClient.get<FullName[]>(`http://localhost:3000/names?=${name}`);
  }
}
