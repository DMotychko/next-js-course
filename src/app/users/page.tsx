import React from 'react';
import {IUser} from "@/models/IUser";
import UserComponent from "@/components/user/UserComponent";

const UsersPage = async () => {
    const users: IUser[] = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;