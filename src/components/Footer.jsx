import React from "react";
import Logo from "./Logo";
import { Link } from "react-router";
import LinkButton from "./LinkButton";
import {
    LinkedInIcon,
    FacebookIcon,
    InstagramIcon,
    YouTubeIcon,
} from "./Icons";

const Footer = () => {
    const footerData = {
        columns: [
            {
                title: "Who We Are",
                links: [
                    { label: "About Us", href: "#" },
                    { label: "Business Referral Network", href: "#" },
                    { label: "University Partnership", href: "#" },
                    { label: "The 54th Pitch", href: "#" },
                ],
            },
            {
                title: "What We Do",
                links: [
                    { label: "Business Strategy", href: "#" },
                    { label: "Market Entry", href: "#" },
                    { label: "Business Research", href: "#" },
                    { label: "Sales", href: "#" },
                    { label: "Marketing", href: "#" },
                    { label: "Business Audit", href: "#" },
                ],
            },
        ],
        contact: {
            title: "Contact Us",
            socials: [
                { name: "LinkedIn", href: "#", icon: LinkedInIcon },
                { name: "Facebook", href: "#", icon: FacebookIcon },
                { name: "Instagram", href: "#", icon: InstagramIcon },
                { name: "YouTube", href: "#", icon: YouTubeIcon },
            ],
        },
    };

    return (
        <footer className="bg-[#0D4036] w-full">
            <div className="container mx-auto p-8 md:p-16 font-walsheim flex flex-col md:flex-row flex-wrap justify-between gap-12">
                <div className="flex flex-col gap-8 flex-1">
                    <Logo width="w-[100px]" />

                    <p className="tracking-[0.5px] leading-6 text-white">
                        P23 Africa LTD is registered in the United Kingdom.
                        Company No: 15246700
                    </p>
                </div>

                {/* Link Columns */}
                <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">
                    {footerData.columns.map((column, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h3 className="font-normal text-xl text-white mb-2">
                                {column.title}
                            </h3>
                            <ul className="space-y-1">
                                {column.links.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="font-light text-base text-white tracking-wider hover:text-gray-300 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact & Socials Column */}
                <div className="flex flex-col gap-4">
                    <h3 className="font-normal text-xl text-white">
                        {footerData.contact.title}
                    </h3>
                    <div className="flex flex-row items-center gap-4">
                        {footerData.contact.socials.map((social, index) => (
                            <Link
                                key={index}
                                href={social.href}
                                aria-label={social.name}
                                className="text-[#CCED60] hover:text-white transition-colors"
                            >
                                <social.icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Subscription Form */}
                <div className="flex flex-col gap-5 w-full max-w-sm flex-1">
                    <h3 className="font-light text-2xl text-white tracking-wider">
                        Subscribe to get Updates
                    </h3>
                    <form onSubmit={(e) => e.preventDefault()} className="flex">
                        <label htmlFor="email-subscribe" className="sr-only">
                            Enter your email
                        </label>
                        <input
                            id="email-subscribe"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-[#0D4036] border-2 border-[#CCED60]/60 rounded-lg p-4 text-white placeholder-white/60 focus:outline-none focus:border-brand-lime transition-colors"
                        />
                    </form>

                    <LinkButton
                        href="#"
                        variant="accent"
                        icon
                        className="self-start"
                    >
                        Subscribe
                    </LinkButton>
                </div>
            </div>

            <div className="container mx-auto py-4 px-8 md:px-16 flex items-center justify-end gap-[7px] font-georgia text-base text-white">
                <span className="">©P23 Africa 2025</span>
                <span className="hidden md:inline-flex">•</span>
                <Link to="#" className="hidden md:inline-flex">
                    Privacy Policy
                </Link>
                <span className="hidden md:inline-flex">•</span>
                <Link to="#" className="hidden md:inline-flex">
                    Terms & Conditions
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
