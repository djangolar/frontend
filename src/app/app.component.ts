import { Component } from '@angular/core';
import { BackendService } from './backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BackendService],
})
export class AppComponent {
  title = 'djangolar';
  posts = [{title: 'test'}];

  constructor(private api: BackendService) {
    this.getPosts();
  }
  getPosts = () => {
    this.api.getAllPosts().subscribe(
    data => {
      this.posts = data;
    },
    error => {
      console.log(error);
    }
    )
  }
}
