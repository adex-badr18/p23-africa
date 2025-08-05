import React, { useState } from "react";
import {
    LinkedInIcon,
    FacebookIcon,
    InstagramIcon,
    YouTubeIcon,
    Hamburger,
    CloseIcon,
} from "./Icons";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import LinkButton from "./LinkButton";

const navLinks = [
    { id: 1, text: "Who We Are", url: "/" },
    { id: 2, text: "What We Do", url: "/" },
    { id: 3, text: "Our Events", url: "/" },
    { id: 4, text: "Resource Hub", url: "/" },
    { id: 5, text: "Let’s Collaborate", url: "/" },
];

const socialIcons = [
    {
        id: 1,
        name: "linkedin",
        url: "#",
        icon: LinkedInIcon,
    },
    { id: 2, name: "facebook", url: "#", icon: FacebookIcon },
    { id: 3, name: "instagram", url: "#", icon: InstagramIcon },
    { id: 4, name: "youtube", url: "#", icon: YouTubeIcon },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#0D4036]">
            {/* Desktop */}
            <div className="hidden md:flex justify-between items-center px-10 py-5 gap-4 container mx-auto">
                {/* Logo */}
                <Logo />

                {/* Navigation Links */}
                <div className="flex gap-12 text-white text-sm font-normal">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.url}
                            className="hover:text-gray-300"
                        >
                            {link.text}
                        </NavLink>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-10 text-white px-10 text-xs">
                    {/* Subscribe Button */}
                    <LinkButton variant="text" href="#">
                        Subscribe
                    </LinkButton>

                    <div className="flex items-center gap-4">
                        {socialIcons.map((social) => (
                            <Link
                                key={social.id}
                                href={social.href}
                                aria-label={social.name}
                                className="text-white hover:text-white transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex justify-between items-center px-4 py-4">
                <Logo />

                {/* Hamburger Icon */}
                <button onClick={toggleMenu} className="text-white">
                    {isMenuOpen ? <CloseIcon /> : <Hamburger />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } fixed inset-0 w-full h-full z-40 md:hidden bg-[#0D4036] transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col items-start p-6 gap-4 text-white">
                    <div className="flex items-center justify-between gap-4 w-full">
                        <Logo />

                        <button onClick={toggleMenu} className="text-white">
                            <CloseIcon />
                        </button>
                    </div>

                    <ul className="flex flex-col space-y-4 mt-8 divide-y w-full">
                        {navLinks.map((link) => (
                            <li key={link.id} className="pb-4">
                                <NavLink
                                    to={link.url}
                                    className="w-full py-2 border-b border-white/20"
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <LinkButton variant="text" href="#" className="">
                        Subscribe
                    </LinkButton>

                    <div className="flex gap-4 mt-4">
                        {socialIcons.map((social) => (
                            <Link
                                key={social.id}
                                href={social.href}
                                aria-label={social.name}
                                className="text-white hover:text-white transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
