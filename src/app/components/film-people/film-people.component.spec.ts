import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPeopleComponent } from './film-people.component';

describe('FilmPeopleComponent', () => {
  let component: FilmPeopleComponent;
  let fixture: ComponentFixture<FilmPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
