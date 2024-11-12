import React from 'react';
import Link from "next/link";

const MenuComponent = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link href='/'>home</Link></li>
                    <li><Link href='/users'>users</Link></li>
                    <li><Link href='/posts'>posts</Link></li>
                    <li><Link href='/comments'>comments</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuComponent;