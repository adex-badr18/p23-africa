import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import EventCard from "./components/EventCard";
import LinkButton from "./components/LinkButton";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
    const cardData = {
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        buttonText: "Join Now",
        linkText: "Event Details",
    };

    return (
        <div className="w-screen overflow-x-hidden">
            <NavBar />

            <Hero />

            <Events />

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                {/* First Variation (Dark and Rotated) */}
                <EventCard
                    variant="dark"
                    title="Vision & Execution"
                    {...cardData}
                    className="-rotate-6" // Applying the rotation here
                />

                {/* Second Variation (Light and Straight) */}
                <EventCard variant="light" title="Event Name" {...cardData} />
            </div>

            <div className="bg-gray-800 p-8 rounded-lg flex flex-col items-center space-y-6">
                <h2 className="text-white text-xl font-bold mb-4">
                    Button Variants
                </h2>

                {/* Variant 1 */}
                <LinkButton variant="text" href="#">
                    Text Link
                </LinkButton>

                {/* Variant 2 */}
                <LinkButton variant="primary-light" href="#" icon>
                    Primary Light
                </LinkButton>

                {/* Variant 3 (with rotation passed as a className) */}
                <LinkButton
                    variant="primary-dark"
                    href="#"
                    icon
                    className="-rotate-6"
                >
                    Primary Dark
                </LinkButton>

                {/* Variant 4 */}
                <LinkButton variant="secondary-light" href="#" icon>
                    Secondary Light
                </LinkButton>

                {/* Variant 5 */}
                <LinkButton variant="accent" href="#" icon>
                    Accent
                </LinkButton>
            </div>

            <Footer />
        </div>
    );
}

export default App;
