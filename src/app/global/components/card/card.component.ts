import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() items;
  
  constructor() { }

  ngOnInit(): void {
    // console.log('card component: ', this.items);
  }

}
