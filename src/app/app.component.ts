import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'manage-posts';

  cardList = [
    {
      picture: `https://material.angular.io/assets/img/examples/shiba2.jpg`,
      text: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.`,
      tags: ['Tag1', 'tag2', 'tag3'],
      btn: { name: 'View' }
    }
  ];

}
