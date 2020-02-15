import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { NewPostComponent } from './new-post/new-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: 'new',
    component: NewPostComponent
  },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
