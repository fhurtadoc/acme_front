import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachDriverComponent } from './attach-driver.component';

describe('AttachDriverComponent', () => {
  let component: AttachDriverComponent;
  let fixture: ComponentFixture<AttachDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
