import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundneckComponent } from './roundneck.component';

describe('RoundneckComponent', () => {
  let component: RoundneckComponent;
  let fixture: ComponentFixture<RoundneckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundneckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundneckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
