import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInboxMailComponent } from './admin-inbox-mail.component';

describe('AdminInboxMailComponent', () => {
  let component: AdminInboxMailComponent;
  let fixture: ComponentFixture<AdminInboxMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInboxMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInboxMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
