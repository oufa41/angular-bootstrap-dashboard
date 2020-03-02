import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickOnFab() {
   $('.btn-group-fab').toggleClass('active');
   ($('has-tooltip') as any).tooltip();
  }
}
