import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-white text-xl md:text-2xl font-bold">National Law Chamber</h1>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <ul className="flex space-x-4 ">
                                <NavItem to="/" label="Home" isActive={location.pathname === "/"} />
                                <NavItem to="/aboutus" label="About Us" isActive={location.pathname === "/aboutus"} />
                                <NavItem to="/practiceareas" label="Practice Areas" isActive={location.pathname === "/practiceareas"} />
                                <NavItem to="/consultation" label="Consultation" isActive={location.pathname === "/consultation"} />
                                <NavItem to="/contactus" label="Contact Us" isActive={location.pathname === "/contactus"} />
                            </ul>
                        </div>
                    </div>
                    <div className="flex md:hidden">
                        <button className="text-white hover:text-gray-300 focus:outline-none" onClick={toggleMenu}>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <ul className="bg-gray-800 px-5">
                        <li className="pb-4"><NavItem to="/" label="Home" isActive={location.pathname === "/"} /></li>
                        <li className="pb-4"><NavItem to="/aboutus" label="About Us" isActive={location.pathname === "/aboutus"} /></li>
                        <li className="pb-4"><NavItem to="/practiceareas" label="Practice Areas" isActive={location.pathname === "/practiceareas"} /></li>
                        <li className="pb-4"><NavItem to="/consultation" label="Consultation" isActive={location.pathname === "/consultation"} /></li>
                        <li className="pb-4"><NavItem to="/contactus" label="Contact Us" isActive={location.pathname === "/contactus"} /></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

const NavItem = ({ to, label, isActive }) => {
    return (
        <Link to={to} className={`text-white px-3 py-2 rounded-md text-sm font-medium  ${isActive ? "bg-gray-900" : "hover:text-gray-400 focus:bg-gray-700"} focus:outline-none focus:text-white`}>
            {label}
        </Link>
    );
}

export default Navbar;
