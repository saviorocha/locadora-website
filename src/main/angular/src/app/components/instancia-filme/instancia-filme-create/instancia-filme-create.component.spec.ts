import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaFilmeCreateComponent } from './instancia-filme-create.component';

describe('InstanciaFilmeCreateComponent', () => {
  let component: InstanciaFilmeCreateComponent;
  let fixture: ComponentFixture<InstanciaFilmeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaFilmeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaFilmeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
