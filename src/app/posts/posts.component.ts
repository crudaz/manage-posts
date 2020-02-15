import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts$: Object;
  currentPost$: Object;
  

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.getPosts()
    .subscribe(res => this.posts$ = res);
  }

  addPost() {
    const newPost = {
      "title": "post3 title",
      "description": "post3 description",
      "tags": [
        "tag1"
      ]
    };

    this.http.addPost(newPost).subscribe(
      res => {
        console.log('addPost: ', res);
        this.getPosts();
      },
      err => {
        console.log(err);
      }
    );
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


  handleAction(e) {
    console.log('post: ', e);
    this.addPost();
  }

}
