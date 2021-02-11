import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaFilmeReadComponent } from './instancia-filme-read.component';

describe('InstanciaFilmeReadComponent', () => {
  let component: InstanciaFilmeReadComponent;
  let fixture: ComponentFixture<InstanciaFilmeReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaFilmeReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaFilmeReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
