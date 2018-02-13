import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  team_members = [
    {
      'name':'Jacob Savitt',
      'position':'Principal',
      'photo':'../assets/jacob_savitt.jpg',
      'summary':'Founder of Puzzle Equity Solutions, Jacob Savitt recognized the strong market demand for non-traditional deal structures in the NYC middle-market.   While obtaining a degree in Real Estate Finance at the Gallatin School of New York University, Jacob worked over 40 hours a week at Brooklyn-based NSRE — transacting close to $25 million within his first 12 months in the business. Working intensively with creative deal structures such as land-leases, option structures, and owner-financing, Jacob quickly recognized the strong market demand for non-traditional deal structures in the middle-market.  Jacob designed Puzzle to be a leader in creating unique solutions for New York real estate investors.',
      'summary_part2':'Jacob oversees all day-to-day operations including deal-sourcing, feasibility analysis, marketing, branding, negotiating, and management.'
    },
    {
      'name':'William Savitt',
      'position':'Principal',
      'photo':'../assets/william_savitt.jpg',
      'summary':"William Savitt is a partner of Wachtell, Lipton, Rosen & Katz, a leading New York law firm.  While removed from day-to-day operations, William plays an advisory role, leveraging his experience in creative deal-making to offer novel solutions to real estate sellers.",
      'summary_part2':""
    }
  ]

  ngOnInit() {
  }


}
