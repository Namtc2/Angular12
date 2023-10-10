import { Injectable } from "@angular/core";
import { Post } from "../shared/models/Post";
import { sample_post } from "src/sample_data";

@Injectable({
    providedIn: 'root'
 })
export class PostService{
    constructor() { };
    getAll(): Post[] {
        return sample_post;
      }

}