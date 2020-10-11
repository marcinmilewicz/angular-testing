import { FullName } from './hello.model';
import { asyncScheduler, Observable, scheduled } from 'rxjs';

export const FAKE_NAMES = [
  { firstName: 'John', lastName: 'Dow' },
  { firstName: 'John', lastName: 'Crow' },
  { firstName: 'John', lastName: 'Bowl' },
];

export class HelloApiServiceStub {
  getFullNames(name: string): Observable<FullName[]> {
    return scheduled([FAKE_NAMES], asyncScheduler);
  }
}
