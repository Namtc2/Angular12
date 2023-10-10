import { Post } from "./app/shared/models/Post";

export const sample_post: Post[] = [
    {
        id: '1',
        title: 'Lập trình Angular từ số 0',
        description: 'Lập trình Angular là một kỹ năng lập trình web giúp bạn tạo các ứng dụng web hiện đại và tương tác. Angular là một framework JavaScript mã nguồn mở được phát triển bởi Google. Nó sử dụng TypeScript, một ngôn ngữ lập trình dựa trên JavaScript. Angular được thiết kế để tạo các ứng dụng web một trang (SPA) ...',
        content: 'Lập trình angular',
        author: 'Nguyễn Văn A',
        publishedAt: new Date(),
        tag: ['code'],
        views: 10,
        likes: 4,
        dislikes: 1,
        comments: ['string'],
        images: ['https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    },
    {
        id: '2',
        title: 'Lập trình Java từ số 0',
        description: 'Lập trình Java là một kỹ năng lập trình cho phép bạn tạo các ứng dụng và phần mềm sử dụng ngôn ngữ lập trình Java. Java là một ngôn ngữ lập trình hướng đối tượng, được phát triển bởi Sun Microsystems (nay là Oracle Corporation) vào năm 1995 ...',
        content: 'Lập trình java',
        author: 'Nguyễn Văn B',
        publishedAt: new Date(),
        tag: ['code'],
        views: 10,
        likes: 4,
        dislikes: 1,
        comments: ['string'],
        images: ['https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    }
    ,
    {
        id: '3',
        title: 'Lập trình Restful API Java từ số 0',
        description: 'Lập trình Restful API Java là một kỹ năng lập trình cho phép bạn tạo các API Restful sử dụng ngôn ngữ lập trình Java. API Restful là một giao diện lập trình ứng dụng (API) tuân theo các nguyên tắc kiến trúc REST. REST là một kiến trúc web dựa trên các phương thức HTTP để thao tác với tài nguyên ...',
        content: 'Lập trình java',
        author: 'Nguyễn Văn C',
        publishedAt: new Date(),
        tag: ['code'],
        views: 10,
        likes: 4,
        dislikes: 1,
        comments: ['string'],
        images: ['https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'],
    }
];