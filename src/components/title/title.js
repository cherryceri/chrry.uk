import React from 'react';

function MainTitle(props) {
    return (
        <h1 className="font-montserrat tracking-wide font-semibold pointer-events-none text-6xl text-primary z-2">
            {props.text}
        </h1>
    );
}

export default MainTitle;