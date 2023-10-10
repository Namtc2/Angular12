import { Post } from "./Post";

export class CartItem {
    constructor(public post: Post) { }
    quantity: number = 1;
    likes: number = this.post.likes;
    views: number = this.post.views;
}