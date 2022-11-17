import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsDetailsComponent } from './stars-details.component';

describe('StarsDetailsComponent', () => {
  let component: StarsDetailsComponent;
  let fixture: ComponentFixture<StarsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
