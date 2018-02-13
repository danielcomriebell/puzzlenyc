import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-transactions',
  templateUrl: './selected-transactions.component.html',
  styleUrls: ['./selected-transactions.component.scss']
})
export class SelectedTransactionsComponent implements OnInit {

  selected_transactions = [
    {
      'property_image':'../assets/apt3.jpg',
      'address':'846 Flushing Ave',
      'date':'December 2017',
      'summary':'Jacob transacted 846 Flushing Avenue, an RGA Development Site featuring 17,000 buildable square-feet in Bushiwck. The property owner entered into a 99-year land-lease with an option-to-buy after 5 years, enabling the property owner to achieve the highest possible selling price while in the interim receiving income comparable to the income he were to receive had he reinvested his sales proceeds in a 1031.'
    },
    {
      'property_image':'../assets/apt2.jpg',
      'address':'37-27 107th St',
      'date':'December 2017',
      'summary':'Jacob transacted 37-27 107th Street, a 33-unit, 25,000 square foot elevator building in Corona, Queens. Jacob brought the buyer and subsequently negotiated the deal on behalf of the seller.'
    },
    {
      'property_image':'../assets/apt1.jpg',
      'address':'130 Graham Avenue',
      'date':'December 2017',
      'summary':'Jacob was heavily involved in the sale of 130 Graham Avenue, a 12,000 square foot building to be delivered vacant in East Williamsburg. Jacob found the buyer and subsequently arranged owner-financing for the seller, allowing him to sell the asset at the highest possible price.'
    },

  ]

  constructor() { }

  ngOnInit() {
  }

}
