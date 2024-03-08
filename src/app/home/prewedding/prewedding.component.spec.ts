import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreweddingComponent } from './prewedding.component';

describe('PreweddingComponent', () => {
  let component: PreweddingComponent;
  let fixture: ComponentFixture<PreweddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreweddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreweddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
