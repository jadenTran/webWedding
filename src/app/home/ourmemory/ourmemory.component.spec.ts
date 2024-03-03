import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurmemoryComponent } from './ourmemory.component';

describe('OurmemoryComponent', () => {
  let component: OurmemoryComponent;
  let fixture: ComponentFixture<OurmemoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurmemoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurmemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
