import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  post$: any;
  idPost: string;
  baseImageUrl = "http://localhost:3000/";

  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idPost = params['id'];
      this.getPost(this.idPost);
    });
  }

  getPost(id) {
    this.http.getPostById(id)
    .subscribe(res => this.post$ = res);
  }

}
