import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDialogFlowComponent } from './ng-dialog-flow.component';

describe('NgDialogFlowComponent', () => {
  let component: NgDialogFlowComponent;
  let fixture: ComponentFixture<NgDialogFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDialogFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDialogFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
