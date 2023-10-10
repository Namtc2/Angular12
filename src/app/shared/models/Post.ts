export class Post {
    id!: string;
    title!: string;
    description!: string;
    content!: string;
    author!: string;
    publishedAt!: Date;
    tag!: string[];
    views!: number;
    likes!: number;
    dislikes!: number;
    comments!: string[];
    images!: string[];
}