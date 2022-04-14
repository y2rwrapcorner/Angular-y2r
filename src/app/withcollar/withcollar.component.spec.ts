import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithcollarComponent } from './withcollar.component';

describe('WithcollarComponent', () => {
  let component: WithcollarComponent;
  let fixture: ComponentFixture<WithcollarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithcollarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithcollarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
