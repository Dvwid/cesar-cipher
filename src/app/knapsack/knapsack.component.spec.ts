import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnapsackComponent } from './knapsack.component';

describe('KnapsackComponent', () => {
  let component: KnapsackComponent;
  let fixture: ComponentFixture<KnapsackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnapsackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnapsackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
