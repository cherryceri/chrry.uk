import React from 'react';

const GridItem = ({ text, img }) => {
    return (
        <div className='flex flex-col'>
            <img src={img} className="p-2 md:p-4 w-full my-2 bg-neutral object-cover bg-opacity-15 border-solid border-2 md:border-4 border-tertiary border-opacity-5" />
            <p className="text-neutral px-4 text-center brightness-110 leading-4 italic font-medium tracking-tighter md:text-lg text-base w-full">{text}</p>
        </div>
    );
};

export default GridItem;