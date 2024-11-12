import React from 'react';
import {IComment} from "@/models/IComment";
import CommentComponent from "@/components/comment/CommentComponent";
const CommentsPage = async () => {
    const comments: IComment[] = await fetch('https://jsonplaceholder.typicode.com/comments').then(comments => comments.json())
    return (
        <div>
            {comments.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;