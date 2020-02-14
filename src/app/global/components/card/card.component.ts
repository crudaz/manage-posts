import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item;
  
  constructor() { }

  ngOnInit() {
    this.item.photoUrl = `http://localhost:3000/${this.item.photoUrl}`;
  }
  
}
