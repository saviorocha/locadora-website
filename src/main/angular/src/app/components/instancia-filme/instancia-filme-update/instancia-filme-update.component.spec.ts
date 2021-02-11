import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaFilmeUpdateComponent } from './instancia-filme-update.component';

describe('InstanciaFilmeUpdateComponent', () => {
  let component: InstanciaFilmeUpdateComponent;
  let fixture: ComponentFixture<InstanciaFilmeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaFilmeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaFilmeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
