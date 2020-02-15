import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() action = new EventEmitter<any>();
  title = "Talos technical test";
  btnName = "+";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeBtnName(newTitle) {
    this.btnName = newTitle;
  }

  handleAction(e) {
    // this.action.emit(e);
    this.router.navigate(['new']);
  }

}
