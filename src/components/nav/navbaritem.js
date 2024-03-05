import React from 'react';

const NavbarItem = ({ text, link }) => {
    return (
        <li>
            <a href={link} className="text-tertiary font-montserrat">{text}</a>
        </li>
    );
};

export default NavbarItem;