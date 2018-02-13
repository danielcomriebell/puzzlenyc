import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  page_title:string="About Us";
  paragraph_part1:string="Based in Lower Manhattan, Puzzle Equity Solutions is a full-service commercial real estate firm providing advisory and brokerage services to real estate investors and developers.";
  paragraph_part2:string="Puzzle specializes as an investment-sales broker with a particular focus on creative deal-making in the middle market, including non-traditional deal structures such as joint ventures and 99-year land leases.";
  paragraph_part3:string="We work closely with property owners and prospective buyers to develop the most complete range of investment options.";
  constructor() { }

  ngOnInit() {
  }

}
