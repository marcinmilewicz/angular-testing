import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FullNameListComponent } from './full-name-list.component';
import { HelloApiService } from '../hello-api.service';
import { FAKE_NAMES, HelloApiServiceStub } from '../hello-api.service.stub';
import { TestScheduler } from 'rxjs/testing';

describe('FullNameListComponent', () => {
  let component: FullNameListComponent;
  let fixture: ComponentFixture<FullNameListComponent>;
  let scheduler: TestScheduler;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullNameListComponent],
      providers: [{ provide: HelloApiService, useClass: HelloApiServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullNameListComponent);
    component = fixture.componentInstance;
  });

  it('should fullNames be triggered on name change', fakeAsync(() => {
    const expectedFullNames = FAKE_NAMES;

    component.fullNames$.subscribe((fullNames) => {
      expect(fullNames).toEqual(expectedFullNames);
    });

    component.name = 'John';
    tick();
  }));
});
