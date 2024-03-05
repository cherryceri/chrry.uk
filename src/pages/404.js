import React from 'react';
import * as cmp from '../components/components.js';

const NotFound = () => {
    return (
        <div className="App bg-gradient-to-br from-neutral to-darker bg-cover background-animate">
            <cmp.Navbar title="cherry" />

            <div className="flex container flex-col h-screen relative pt-40 mx-auto items-center">

                <cmp.Title text="404" />
                <cmp.Divider />

                <div className='flex container flex-col h-screen relative pt-2 mx-auto items-center'>
                    <p className="text-secondary animate-pulse text-lg">Page not found</p>
                    <p className="animate-pulse">🍒</p>
                </div>

            </div>
        </div>
    );
}

export default NotFound;