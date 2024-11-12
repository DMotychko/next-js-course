import React from 'react';
import {IPost} from "@/models/IPost";
import PostComponent from "@/components/post/PostComponent";

const PostsPage = async () => {
    const posts: IPost[] = await fetch('https://jsonplaceholder.typicode.com/posts').then(posts => posts.json())
    return (
        <div>
            {posts.map(post => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsPage;