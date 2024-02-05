import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoInHomeComponent } from './photo-in-home.component';

describe('PhotoInHomeComponent', () => {
  let component: PhotoInHomeComponent;
  let fixture: ComponentFixture<PhotoInHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoInHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoInHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
