import React, {FC} from 'react';
import {IComments} from "@/models/IComments";
import Link from "next/link";

type Props = {
    comment: IComments
}
const CommentPage: FC<Props> = ({comment}) => {
    return (
        <div>
            <Link href={'/comments/' + comment.id.toString()}>{comment.name}</Link>
        </div>
    );
};

export default CommentPage;