import React from 'react';

const GridItem = ({ title, text, img }) => {
    return (
        <div className='flex flex-col'>
            <img src={img} className="p-2 md:p-4 w-full bg-neutral object-cover bg-opacity-15 border-solid border-2 md:border-4 border-tertiary border-opacity-5" />
            <h3 className="text-neutral px-4 text-center brightness-110 italic font-bold md:text-xl text-lg w-full">{title}</h3>
            <p className="text-neutral px-4 text-center brightness-110 italic font-medium tracking-tighter text-sm leading-3 w-full">{text}</p>
        </div>
    );
};

export default GridItem;