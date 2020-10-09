import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, merge, Observable, of } from 'rxjs';
import { FullName } from '../hello.model';
import { HelloApiService } from '../hello-api.service';
import { share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-full-name-list[name]',
  templateUrl: './full-name-list.component.html',
  styleUrls: ['./full-name-list.component.scss'],
})
export class FullNameListComponent implements OnInit {
  initName$: BehaviorSubject<string> = new BehaviorSubject<string>('');

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

  ngOnInit(): void {
    this.initMethod();
  }

  initMethod(): void {}

  trackByFn(index: number): number {
    return index;
  }
}
