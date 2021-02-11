import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaFilmeDeleteComponent } from './instancia-filme-delete.component';

describe('InstanciaFilmeDeleteComponent', () => {
  let component: InstanciaFilmeDeleteComponent;
  let fixture: ComponentFixture<InstanciaFilmeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaFilmeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaFilmeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
