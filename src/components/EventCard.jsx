import { Link } from "react-router";
import { Calendar, ShortArrow, LongArrow } from "./Icons";

/**
 * A responsive feature card component.
 * @param {object} props
 * @param {'dark' | 'light'} props.variant - The color scheme of the card.
 * @param {string} props.title - The main title of the card.
 * @param {string} props.description - The descriptive text.
 * @param {string} props.buttonText - Text for the primary button.
 * @param {string} props.linkText - Text for the secondary link.
 * @param {string} props.className - Additional classes for custom styling (e.g., rotation).
 */
const EventCard = ({
    variant = "light",
    title,
    description,
    buttonText,
    buttonUrl = "/",
    linkText,
    linkUrl = "/",
    className = "",
}) => {
    // Define styles based on the variant prop
    const styles = {
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

    const currentStyle = styles[variant];

    return (
        <div
            className={`flex flex-col items-start p-6 sm:p-8 gap-3 w-full max-w-md mx-auto rounded-lg shadow-2xl font-walsheim transition-all duration-300 ${currentStyle.cardBg} ${currentStyle.textColor} ${className}`}
        >
            {/* Card Header */}
            <div className="flex flex-row items-center gap-3">
                <Calendar fill={currentStyle.iconColor} />
                <h2 className="font-extrabold text-2xl leading-tight">
                    {title}
                </h2>
            </div>

            {/* Card Body */}
            <p className="font-light text-base leading-snug">
                {description}
            </p>

            {/* Card Footer */}
            <div className="flex flex-wrap items-center justify-between w-full mt-4 gap-4">
                <Link
                    to={buttonUrl}
                    className={`flex flex-row justify-center items-center gap-3  py-2.5 px-4 rounded-lg border transition-colors duration-300
                    ${currentStyle.buttonBg} 
                    ${currentStyle.buttonBorder}
                `}
                >
                    <span
                        className={`font-bold text-base tracking-wide ${currentStyle.buttonTextColor}`}
                    >
                        {buttonText}
                    </span>
                    <ShortArrow fill={currentStyle.iconColor} />
                </Link>

                <Link to={linkUrl} className="flex flex-row items-center gap-2 group">
                    <span
                        className={`font-medium text-base ${currentStyle.linkColor}`}
                    >
                        {linkText}
                    </span>
                    <LongArrow fill={currentStyle.iconColor} />
                </Link>
            </div>
        </div>
    );
};

export default EventCard;
