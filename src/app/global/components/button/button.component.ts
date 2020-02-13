import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text;
  @Output() action = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    // console.log('handleClick');
    this.action.emit('button + pressed');
  }

}
