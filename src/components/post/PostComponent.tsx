import React, {FC} from 'react';
import {IPost} from "@/models/IPost";
import Link from "next/link";

type Props ={
    post: IPost
}
const PostComponent: FC<Props> = ({post}) => {
    return (
        <div>
            <Link href={'/posts/' + post.id.toString()}>{post.title}</Link>
        </div>
    );
};

export default PostComponent;