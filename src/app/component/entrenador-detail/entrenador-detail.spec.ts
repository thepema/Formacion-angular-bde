import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorDetail } from './entrenador-detail';

describe('EntrenadorDetail', () => {
  let component: EntrenadorDetail;
  let fixture: ComponentFixture<EntrenadorDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntrenadorDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrenadorDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
