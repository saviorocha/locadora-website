import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaFilmeCrudComponent } from './instancia-filme-crud.component';

describe('InstanciaFilmeCrudComponent', () => {
  let component: InstanciaFilmeCrudComponent;
  let fixture: ComponentFixture<InstanciaFilmeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaFilmeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaFilmeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
