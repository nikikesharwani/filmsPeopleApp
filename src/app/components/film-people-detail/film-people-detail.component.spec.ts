import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPeopleDetailComponent } from './film-people-detail.component';

describe('FilmPeopleDetailComponent', () => {
  let component: FilmPeopleDetailComponent;
  let fixture: ComponentFixture<FilmPeopleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmPeopleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
