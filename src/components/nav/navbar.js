import React, { useState } from 'react';
import NavbarItem from './navbaritem';

const Navbar = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    let titlehtml = "";
    if (title) titlehtml = <div className="text-tertiary font-bold">{title}</div>;

    const items = [
        { text: 'home', link: 'https://chrry.uk' },
        { text: 'gallery', link: 'https://chrry.uk/gallery' }
    ];

    return (
        <nav className="absolute z-40 top-0 w-full">
            <div className="p-4">
                <div className="mx-auto p-4">
                    <div className="flex justify-between items-center">
                        <div className="text-tertiary text-xl tracking-wider font-bold">{title}</div>
                        <div className="md:hidden">
                            {/* Hamburger menu */}
                            <button onClick={toggleMenu} className="text-tertiary text-4xl focus:outline-none">
                                {isOpen ? (
                                    <span className="mdi mdi-menu-open"></span>
                                ) : (
                                    <span className="mdi mdi-menu"></span>
                                )}
                            </button>
                        </div>
                        <div className="hidden md:block">
                            {/* Desktop view */}
                            <ul className="flex space-x-4 text-lg">
                                {items.map((item, index) => (
                                    <NavbarItem key={index} text={item.text} link={item.link} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Mobile view */}
                    {isOpen && (
                        <div className="md:hidden float-right text-right text-2xl">
                            <ul className="mt-2 space-y-2">
                                {items.map((item, index) => (
                                    <NavbarItem key={index} text={item.text} link={item.link} />
                                ))}
                            </ul>
                        </div>
                    )}
                </div >
            </div >
        </nav >
    );
};
export default Navbar;