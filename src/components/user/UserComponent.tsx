import React, {FC} from 'react';
import {IUser} from "@/models/IUser";
import Link from "next/link";

type Props = {
    user: IUser
}
const UserComponent: FC<Props> = ({user}) => {
    return (
        <div>
            <Link href={`/users/${user.id}`}>{user.username}</Link>
        </div>
    );
};

export default UserComponent;