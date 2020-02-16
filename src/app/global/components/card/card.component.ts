import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() item;
  @Output() actionView = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    this.item.photoUrl = `http://localhost:3000/${this.item.photoUrl}`;
  }

  handleAction(item) {
    this.actionView.emit(item);
  }
  
}
