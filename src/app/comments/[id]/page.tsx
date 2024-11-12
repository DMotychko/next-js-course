import React, {FC} from 'react';
import {Params} from "next/dist/server/request/params";
import {IComments} from "@/models/IComments";

type Props = {
    params: Params
}
const Page: FC<Props> = async ({params}) => {
    const comment: IComments = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`)
        .then(comment => comment.json())
    return (
        <div>
            {comment.name}
        </div>
    );
};

export default Page;