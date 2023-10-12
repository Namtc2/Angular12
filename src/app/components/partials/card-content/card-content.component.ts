import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/Post.service';
import { Post } from 'src/app/shared/models/Post';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss']
})
export class CardContentComponent implements OnInit {
  constructor() {   
  }
  @Input() posts!: Post[];

  ngOnInit(): void {
    console.log(this.posts)
  }

}
