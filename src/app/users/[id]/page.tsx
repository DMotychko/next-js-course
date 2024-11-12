import React, {FC} from 'react';
import {Params} from "next/dist/server/request/params";
import {IUser} from "@/models/IUser";

type Props = {
    params: Params
}
const Page: FC<Props> = async ({params}) => {
    const user: IUser = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(user => user.json())

    return (
        <div>
            {user.username} - {user.id}
        </div>
    );
};

export default Page;