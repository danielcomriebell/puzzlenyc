import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosophy',
  templateUrl: './philosophy.component.html',
  styleUrls: ['./philosophy.component.scss']
})
export class PhilosophyComponent implements OnInit {
  philosophy_title:string="Philosophy";
  philosophy_text_part1:string="At first blush, a 1000-piece puzzle may seem to create an impossible challenge: how can all the intricate pieces fit together?   Discipline and creativity supply the answer.  It is prudent to first identify all the edge pieces and create a border. Working from the outside in, it becomes easier to solve the puzzle piece-by-piece until the last piece fits seamlessly into the rest. Once the puzzle is complete, the individual pieces each contribute to a much greater sum.";
  philosophy_text_part2:string="Real estate investment is often a puzzle that must be solved. Puzzle Equity Solutions works with sellers backwards-- identifying their goals first and subsequently offering an array of solutions tailored to reach them.";

  constructor() { }

  ngOnInit() {
  }

}
