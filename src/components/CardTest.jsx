import React from "react";

const CardTest = () => {
    return (
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
    );
};

export default CardTest;
