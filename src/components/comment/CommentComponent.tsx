import React, {FC} from 'react';
import {IComment} from "@/models/IComment";
import Link from "next/link";

type Props = {
    comment: IComment
}
const CommentComponent: FC<Props> = ({comment}) => {
    return (
        <div>
            <Link href={'/comments/' + comment.id.toString()}>{comment.name}</Link>
        </div>
    );
};

export default CommentComponent;