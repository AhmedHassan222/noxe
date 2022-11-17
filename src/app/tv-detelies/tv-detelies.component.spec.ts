import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDeteliesComponent } from './tv-detelies.component';

describe('TvDeteliesComponent', () => {
  let component: TvDeteliesComponent;
  let fixture: ComponentFixture<TvDeteliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvDeteliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvDeteliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
