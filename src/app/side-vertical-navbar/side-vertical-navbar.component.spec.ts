import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideVerticalNavbarComponent } from './side-vertical-navbar.component';

describe('SideVerticalNavbarComponent', () => {
  let component: SideVerticalNavbarComponent;
  let fixture: ComponentFixture<SideVerticalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideVerticalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideVerticalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
