import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerysChildComponent } from './gallerys-child.component';

describe('GallerysChildComponent', () => {
  let component: GallerysChildComponent;
  let fixture: ComponentFixture<GallerysChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerysChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerysChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
