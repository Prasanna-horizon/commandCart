import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTerms } from './admin-terms';

describe('AdminTerms', () => {
  let component: AdminTerms;
  let fixture: ComponentFixture<AdminTerms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTerms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTerms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
