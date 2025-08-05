import defaultTheme from "tailwindcss/defaultTheme";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            // Add your custom font family if you haven't already
            fontFamily: {
                sans: ['"GT Walsheim Trial"', ...defaultTheme.fontFamily.sans],
            },
            // Add the custom color from your design
            colors: {
                "brand-dark-green": "#0D4036",
                "brand-lime": "#CCED60"
            },
        },
    },
    plugins: [],
};
