import React, { useState } from 'react';

const IconButton = ({ icon, link, title }) => {
    return (
        <a title={title} href={link} className="hover:brightness-200 transition-all duration-15"><span className={"mdi mdi-" + icon}></span></a>
    )
}

export default IconButton;