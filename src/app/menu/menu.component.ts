import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  openMenu:boolean=false;
  menuItems:Array<any> = [
    {
      "title":'overview',
      "url":'overview'
    },
    {
      "title":'philosophy',
      "url":'philosophy'
    },
    {
      "title":'team',
      "url":'team'
    },
    {
      "title":'contact',
      "url":'contact'
    },
    {
      "title":'selected transactions',
      "url":'selected-transactions'
    },
  ]

  constructor() { }

  initSlide(){
    this.openMenu = !this.openMenu;
  }

  ngOnInit() {
  }

}
