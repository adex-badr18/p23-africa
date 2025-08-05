import React from "react";

const ButtonsTest = () => {
    return (
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
    );
};

export default ButtonsTest;
