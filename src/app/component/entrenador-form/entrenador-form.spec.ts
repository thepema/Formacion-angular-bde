import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorForm } from './entrenador-form';

describe('EntrenadorForm', () => {
  let component: EntrenadorForm;
  let fixture: ComponentFixture<EntrenadorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenadorForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenadorForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
