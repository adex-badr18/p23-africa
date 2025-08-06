import { Link } from "react-router";
import { ShortArrow } from "./Icons";

/**
 * A reusable link button component with multiple variants.
 * @param {object} props
 * @param {'text' | 'primary-light' | 'primary-dark' | 'secondary-light' | 'accent'} props.variant - The style variant of the button.
 * @param {string} props.href - The URL for the link.
 * @param {React.ReactNode} props.children - The text or elements inside the button.
 * @param {boolean} [props.icon] - Whether to display the arrow icon.
 * @param {string} [props.className] - Additional classes for custom styling.
 */
const LinkButton = ({
    variant = "primary-dark",
    href = "",
    children,
    icon = false,
    className = "",
    ...rest
}) => {
    const baseStyles =
        "flex flex-row items-center justify-center font-sans transition-colors duration-300";

    const styles = {
        // Variant 1: Simple text link
        text: "text-white font-normal text-base tracking-wider border border-white rounded-lg px-6 py-2.5 hover:text-gray-300",

        // Variant 2: White background, dark text, large
        "primary-light":
            "bg-white text-[#0D4036] font-normal text-xl tracking-wider rounded-lg px-8 py-3 gap-6 w-full max-w-xs hover:bg-gray-200",

        // Variant 3: Dark background, white text, bordered
        "primary-dark":
            "bg-[#0D4036] text-white font-bold text-base tracking-wider border border-white rounded-lg h-12 px-5 gap-2 hover:bg-opacity-90",

        // Variant 4: White background, dark text, bordered
        "secondary-light":
            "bg-white text-[#0D4036] font-bold text-base tracking-wider border border-[#0D4036] rounded-lg h-12 px-5 gap-2 hover:bg-gray-100",

        // Variant 5: Lime background, dark text, bordered
        accent: "bg-[#CCED60] text-[#0D4036] font-normal text-base tracking-wider border border-[#0D4036] rounded-lg h-12 px-5 gap-2 hover:bg-opacity-90",
    };

    const iconFillColor = variant.includes("dark") ? "#FFFFFF" : "#0D4036";

    return (
        <Link
            to={href}
            className={`${baseStyles} ${styles[variant]} ${className}`}
            {...rest}
        >
            <span>{children}</span>
            {icon && <ShortArrow fill={iconFillColor} />}
        </Link>
    );
};

export default LinkButton;
