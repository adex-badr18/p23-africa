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

            <Footer />
        </div>
    );
}

export default App;
