import React, {FC} from 'react';
import {Params} from "next/dist/server/request/params";
import {IPost} from "@/models/IPost";

type Props = {
    params: Params
}
const Page: FC<Props> = async ({params}) => {
    const post: IPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(post => post.json())
    return (
        <div>
            {post.title}
        </div>
    );
};

export default Page;