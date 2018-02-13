import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact_info = [
    {
      'company_name':'Puzzle Equity Solutions',
      'addr_1':'51 West 52nd Street',
      'addr_2':'New York, NY 10019',
      'name':'Jacob Savitt',
      'phone':'917 916 0445',
      'email':'jacob@puzzlenyc.com'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
