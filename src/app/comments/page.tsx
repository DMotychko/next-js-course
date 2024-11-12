import React from 'react';
import {IComments} from "@/models/IComments";
import CommentPage from "@/components/comment/CommentPage";
const CommentsPage = async () => {
    const comments: IComments[] = await fetch('https://jsonplaceholder.typicode.com/comments').then(comments => comments.json())
    return (
        <div>
            {comments.map((comment: IComments) => <CommentPage key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;