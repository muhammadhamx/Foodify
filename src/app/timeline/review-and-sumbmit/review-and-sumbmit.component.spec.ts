import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndSumbmitComponent } from './review-and-sumbmit.component';

describe('ReviewAndSumbmitComponent', () => {
  let component: ReviewAndSumbmitComponent;
  let fixture: ComponentFixture<ReviewAndSumbmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewAndSumbmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAndSumbmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
