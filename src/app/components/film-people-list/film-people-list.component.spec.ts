import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPeopleListComponent } from './film-people-list.component';

describe('FilmPeopleListComponent', () => {
  let component: FilmPeopleListComponent;
  let fixture: ComponentFixture<FilmPeopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmPeopleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
