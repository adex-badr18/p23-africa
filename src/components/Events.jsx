import React from "react";
import eventBg from "../assets/event-bg.png";
import LinkButton from "./LinkButton";
import EventCard from "./EventCard";

const Events = () => {
    return (
        <div
            className="bg-[#2D9378] bg-no-repeat bg-cover min-h-screen"
            style={{ backgroundImage: `url("${eventBg}")` }}
        >
            <div className="container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[36px] gap-y-[56px]">
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
                        Explore upcoming events tailored to equip, connect, and
                        empower businesses across Africa and beyond.
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
    );
};

export default Events;
