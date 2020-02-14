import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleAction(e) {
    this.action.emit(e);
  }

}
