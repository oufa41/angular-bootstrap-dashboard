import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHorizontalNavbarComponent } from './top-horizontal-navbar.component';

describe('TopHorizontalNavbarComponent', () => {
  let component: TopHorizontalNavbarComponent;
  let fixture: ComponentFixture<TopHorizontalNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHorizontalNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHorizontalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
