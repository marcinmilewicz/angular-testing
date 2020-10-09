import { Injectable } from '@angular/core';
import { FullName } from './hello.model';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

const FAKE_LAST_NAMES = ['Dow', 'Crow', 'Bowl'];

const asFullNames = (firstName: string, lastNames: string[]) => (): FullName[] =>
  lastNames.map((lastName) => ({ firstName, lastName }));

@Injectable({
  providedIn: 'root',
})
export class HelloApiService {
  getFullNames(name: string): Observable<FullName[]> {
    return timer(1000).pipe(map(asFullNames(name, FAKE_LAST_NAMES)));
  }
}
