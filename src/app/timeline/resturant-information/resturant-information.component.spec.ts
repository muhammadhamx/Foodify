import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantInformationComponent } from './resturant-information.component';

describe('ResturantInformationComponent', () => {
  let component: ResturantInformationComponent;
  let fixture: ComponentFixture<ResturantInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResturantInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
