import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobbyComponent } from './blobby.component';

describe('BlobbyComponent', () => {
  let component: BlobbyComponent;
  let fixture: ComponentFixture<BlobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
