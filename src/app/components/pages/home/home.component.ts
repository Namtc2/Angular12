import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/Post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  postsData: Post[] = [];
  constructor(private postService: PostService) {  
      this.postsData = this.postService.getAll();  
  }
  ngOnInit(): void {
    console.log(this.postsData);
  }
}
