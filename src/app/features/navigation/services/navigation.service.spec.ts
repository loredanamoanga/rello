import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import {NavigationService} from './navigation.service';

const RouterSpy = jasmine.createSpyObj(
  'Router',
  ['navigate']
);

describe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        {provide: Router, useValue: RouterSpy}
      ]
    });
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
