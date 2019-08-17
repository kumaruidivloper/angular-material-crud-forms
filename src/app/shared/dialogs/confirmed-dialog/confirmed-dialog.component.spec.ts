import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedDialogComponent } from './confirmed-dialog.component';

describe('ConfirmedDialogComponent', () => {
  let component: ConfirmedDialogComponent;
  let fixture: ComponentFixture<ConfirmedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
