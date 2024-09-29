import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesCertificationsComponent } from './licenses-certifications.component';

describe('LicensesCertificationsComponent', () => {
  let component: LicensesCertificationsComponent;
  let fixture: ComponentFixture<LicensesCertificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicensesCertificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensesCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
