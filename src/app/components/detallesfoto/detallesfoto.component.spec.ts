import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesfotoComponent } from './detallesfoto.component';

describe('DetallesfotoComponent', () => {
  let component: DetallesfotoComponent;
  let fixture: ComponentFixture<DetallesfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesfotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
