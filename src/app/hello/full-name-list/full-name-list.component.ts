import { Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FullName } from '../hello.model';
import { HelloApiService } from '../hello-api.service';
import { share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-full-name-list[name]',
  template: ` <ul *ngIf="fullNames$ | async as names">
    <li *ngFor="let fullName of names; trackBy: trackByFn">
      FirstName: {{ fullName.firstName }} | LastName: {{ fullName.lastName }}
    </li>
  </ul>`,
})
export class FullNameListComponent {
  private readonly initName$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @Input() title = '';
  @Input() set name(value: string) {
    this.initName$.next(value);
  }

  fullNames$: Observable<FullName[]>;

  constructor(private api: HelloApiService) {
    this.fullNames$ = this.initName$.pipe(
      switchMap((name) => this.api.getFullNames(name)),
      share()
    );
  }

  trackByFn(index: number): number {
    return index;
  }
}
