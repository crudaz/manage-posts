import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  currentPost$: Object;

  constructor(private http: HttpService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.getPosts()
    .subscribe(res => this.posts$ = res);
  }

  getPostById(id) {
    this.http
      .getPostById(id)
      .subscribe(res => (this.currentPost$ = res));
  }

  updatePicture() {
    const id = 0;
    const picture = "";

    this.http.updatePicture(id, picture).subscribe(
      res => {
        console.log('updatePicture: ', res);
      },
      err => {
        console.log(err);
      }
    );
  }

  handleView(e) {
    this.router.navigate(['detail', e.id]);
  }

}
