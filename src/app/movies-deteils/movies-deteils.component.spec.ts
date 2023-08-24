import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDeteilsComponent } from './movies-deteils.component';

describe('MoviesDeteilsComponent', () => {
  let component: MoviesDeteilsComponent;
  let fixture: ComponentFixture<MoviesDeteilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviesDeteilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesDeteilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
