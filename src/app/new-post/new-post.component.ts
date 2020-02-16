import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {  
  postForm: FormGroup;
  url: any;
  tagList = [];

  public imagePath;
  imgURL: any;
  public message: string;
 

  constructor(private http: HttpService, private fb: FormBuilder) {}
  
  ngOnInit(): void {}

  addPost(post) {
    this.http.addPost(post).subscribe(
      res => {
        console.log('addPost: ', res);
      },
      err => {
        console.log(err);
      }
    );
  }

  createForm() {
    this.postForm = this.fb.group({
      title: [''],
      description: [''],
      tags: [''],
    });
  }

  addTag(tag) {
    this.tagList.push(tag);
  }

  onClickSubmit(title, description) {

    const newPost = {
      "title": title,
      "description": description,
      "tags": this.tagList
    };
    
    this.addPost(newPost);
  }
  
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }

}
