import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  const expectedTitle = 'Full Names';

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angular-testing'`, () => {
    component.ngOnInit();
    expect(component.title).toEqual(expectedTitle);
  });
});
