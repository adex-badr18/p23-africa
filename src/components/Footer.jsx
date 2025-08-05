import React from "react";
import Logo from "./Logo";
import { Link } from "react-router";

// Using inline SVGs is a best practice in React. They can be styled with text color.
const LinkedInIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const FacebookIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z" />
    </svg>
);

const InstagramIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.359 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.359-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.359-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
    </svg>
);

const YouTubeIcon = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);

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
        // <footer className="bg-brand-dark-green">
        //     <div className="container mx-auto">
        //         <div className="grid grid-cols-1 text-white font-walsheim">
        //             <div className="flex flex-col gap-8 flex-1">
        //                 <Logo width="w-[100px]" />

        //                 <p className="tracking-[0.5px] leading-6">
        //                     P23 Africa LTD is registered in the United Kingdom.
        //                     Company No: 15246700
        //                 </p>
        //             </div>

        //             <div className="">
        //                 h
        //             </div>
        //         </div>
        //     </div>
        // </footer>

        <footer className="bg-brand-dark-green w-full p-8 sm:p-16 font-walsheim">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div className="flex flex-col gap-8 flex-1">
                    <Logo width="w-[100px]" />

                    <p className="tracking-[0.5px] leading-6">
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
                                className="text-brand-lime hover:text-white transition-colors"
                            >
                                <social.icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
