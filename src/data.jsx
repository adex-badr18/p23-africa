import {
    LinkedInIcon,
    FacebookIcon,
    InstagramIcon,
    YouTubeIcon,
} from "./components/Icons";

export const footerData = {
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

export const eventCardVariantStyles = {
    light: {
        cardBg: "bg-white",
        textColor: "text-[#0D4036]",
        buttonBg: "bg-white",
        buttonBorder: "border-[#0D4036]",
        buttonTextColor: "text-[#0D4036]",
        iconColor: "#0D4036",
        linkColor: "text-[#0D4036]",
        linkArrowColor: "border-[#0D4036]",
    },
    dark: {
        cardBg: "bg-[#0D4036]",
        textColor: "text-white",
        buttonBg: "bg-[#0D4036]",
        buttonBorder: "border-white",
        buttonTextColor: "text-white",
        iconColor: "white",
        linkColor: "text-white",
        linkArrowColor: "border-white",
    },
};

export const navLinks = [
    { id: 1, text: "Who We Are", url: "/" },
    { id: 2, text: "What We Do", url: "/" },
    { id: 3, text: "Our Events", url: "/" },
    { id: 4, text: "Resource Hub", url: "/" },
    { id: 5, text: "Let’s Collaborate", url: "/" },
];

export const socialIcons = [
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