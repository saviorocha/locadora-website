import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanciaFilmeReadDetailComponent } from './instancia-filme-read-detail.component';

describe('InstanciaFilmeReadDetailComponent', () => {
  let component: InstanciaFilmeReadDetailComponent;
  let fixture: ComponentFixture<InstanciaFilmeReadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstanciaFilmeReadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanciaFilmeReadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
