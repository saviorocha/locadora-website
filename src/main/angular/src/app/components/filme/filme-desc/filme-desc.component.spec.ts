import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeDescComponent } from './filme-desc.component';

describe('FilmeDescComponent', () => {
  let component: FilmeDescComponent;
  let fixture: ComponentFixture<FilmeDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
