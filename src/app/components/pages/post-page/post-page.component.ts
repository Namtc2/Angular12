import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/Post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post!: Post;
  constructor(activatedRoute: ActivatedRoute, postService: PostService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.post = postService.getById(params['id']);
    })
  }
  ngOnInit(): void {
  }
}
