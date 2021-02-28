import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserDetailsComponent } from './login-user-details.component';

describe('LoginUserDetailsComponent', () => {
  let component: LoginUserDetailsComponent;
  let fixture: ComponentFixture<LoginUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
