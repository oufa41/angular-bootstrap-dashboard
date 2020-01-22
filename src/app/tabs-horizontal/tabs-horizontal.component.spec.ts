import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsHorizontalComponent } from './tabs-horizontal.component';

describe('TabsHorizontalComponent', () => {
  let component: TabsHorizontalComponent;
  let fixture: ComponentFixture<TabsHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
