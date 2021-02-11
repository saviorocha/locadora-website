import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeCrudComponent } from './filme-crud.component';

describe('FilmeCrudComponent', () => {
  let component: FilmeCrudComponent;
  let fixture: ComponentFixture<FilmeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
