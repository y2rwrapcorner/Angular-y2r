import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecaseComponent } from './mobilecase.component';

describe('MobilecaseComponent', () => {
  let component: MobilecaseComponent;
  let fixture: ComponentFixture<MobilecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobilecaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
