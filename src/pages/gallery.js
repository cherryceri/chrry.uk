import React from 'react';
import * as cmp from '../components/components.js';

const Gallery = () => {

    const items = [
        { text: 'My first animated pixel art sprite', img: 'https://imgur.com/YHmdJ8l.gif' },
    ];

    return (
        <div className="App bg-gradient-to-br from-neutral to-darker bg-cover background-animate">
            <cmp.Navbar title="cherry" />

            <div className="flex container flex-col h-screen relative pt-32 md:pt-40 mx-auto items-center">

                <cmp.Title text="gallery" />

                <cmp.Divider />

                <div className="flex container relative top-10 md:top-10 leading-3 flex-row items-center justify-center text-neutral text-3xl mt-1.5">
                    <div className='grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-3 xl:grid-cols-4 w-full font-serif max-w-[900px] px-10'>
                        {items.map((item, index) => (
                            <cmp.GridItem key={index} text={item.text} img={item.img} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gallery;