import { useState } from "react";
import eventBg from "../assets/event-bg.png";
import LinkButton from "./LinkButton";
import EventCard from "./EventCard";

const Events = () => {
    const [tabIndex, setTabIndex] = useState(1);

    const changeTab = (index) => {
        setTabIndex(index);
    };

    return (
        <>
            {/* Desktop View */}
            <div
                className="hidden md:block bg-[#2D9378] bg-no-repeat bg-cover min-h-screen"
                style={{ backgroundImage: `url("${eventBg}")` }}
            >
                <div className="container mx-auto px-5 md:px-10 py-10 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[36px] gap-y-[56px]">
                        {/* Transparent Card */}
                        <div
                            className={`flex flex-col items-start p-6 sm:p-8 gap-3 w-full max-w-md mx-auto rounded-lg  font-walsheim transition-all duration-300 bg-brand-dark-green text-white`}
                        >
                            {/* Card Header */}
                            <h2 className="font-extrabold text-2xl leading-tight">
                                Upcoming Event For The Year
                            </h2>

                            {/* Card Body */}
                            <p className="font-light text-base leading-relaxed">
                                Explore upcoming events tailored to equip,
                                connect, and empower businesses across Africa
                                and beyond.
                            </p>

                            <LinkButton variant="primary-light" href="#" icon>
                                See All Events
                            </LinkButton>
                        </div>

                        {/* Rotating Card */}
                        <EventCard
                            variant="dark"
                            title="Vision & Execution"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            buttonText="Book A Seat"
                            linkText="Event Details"
                            className="-rotate-5" // Applying the rotation here
                        />

                        {Array.from({ length: 4 }).map((_, i) => (
                            <EventCard
                                key={i}
                                variant="light"
                                title="Event Name"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                buttonText="Book A Seat"
                                linkText="Event Details"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile View of Upcoming event */}
            <div
                className="md:hidden bg-[#2D9378] bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("${eventBg}")` }}
            >
                <div className="container mx-auto px-6 py-10">
                    {/* Transparent Card */}
                    <div
                        className={`flex flex-col items-start gap-6 w-full rounded-lg font-walsheim bg-transparent text-white`}
                    >
                        {/* Card Header */}
                        <h2 className="font-extrabold text-2xl leading-tight">
                            Upcoming Event For The Year
                        </h2>

                        {/* Card Body */}
                        <p className="font-light text-[20px] leading-[24px]">
                            Explore upcoming events tailored to equip, connect,
                            and empower businesses across Africa and beyond.
                        </p>

                        <LinkButton variant="primary-light" href="#" icon>
                            See All Events
                        </LinkButton>
                    </div>
                </div>
            </div>

            {/* Mobile view of event tab component */}
            <div className="md:hidden bg-white py-16">
                <div className="flex items-center mb-10">
                    {["All Event", "BRN Only"].map((buttonItem, index) => (
                        <button
                            className={`flex-1 text-center text-base font-bold py-2.5 px-4 border-b-[3px] border-b-[#0D4036] ${
                                tabIndex === index + 1
                                    ? "bg-[#0D4036] text-white"
                                    : "bg-white text-[#0D4036"
                            }`}
                            onClick={() => changeTab(index + 1)}
                        >
                            {buttonItem}
                        </button>
                    ))}
                </div>

                <div className="px-6">
                    {tabIndex === 1 && (
                        <div className="flex flex-col gap-10">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <EventCard
                                    key={index}
                                    variant="dark"
                                    title="Vision & Execution"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    buttonText="Book A Seat"
                                    linkText="Event Details"
                                />
                            ))}
                        </div>
                    )}

                    {tabIndex === 2 && (
                        <div className="flex flex-col gap-10">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <EventCard
                                    key={index}
                                    variant="light"
                                    title="Vision & Execution"
                                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                    buttonText="Book A Seat"
                                    linkText="Event Details"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Events;
