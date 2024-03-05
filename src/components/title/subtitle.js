import React from 'react';

function SubTitle(props) {
    return (
        <p className="tracking-widest text-secondary animate-pulse">
            {props.text}
        </p>
    );
}

export default SubTitle;