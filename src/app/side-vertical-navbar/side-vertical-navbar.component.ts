import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-vertical-navbar',
  templateUrl: './side-vertical-navbar.component.html',
  styleUrls: ['./side-vertical-navbar.component.scss']
})
export class SideVerticalNavbarComponent implements OnInit {
  names = ['oufa', 'ali', 'ahmed'];
  leafs = ['1', '2', '3'];
  itemClicked: string;
  constructor() { }

  ngOnInit() {
  }
  leafClick(id: string) {

    if (this.itemClicked === id) {
      this.itemClicked = null;
    } else {
      this.itemClicked = id;
    }

  }
}
