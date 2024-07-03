/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,css}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            keyframes: {
                squash: {
                    "0%": { transform: "scaleY(0.1)" },
                    "50%": { transform: "scaleY(1.2)" },
                    "100%": { transform: "scaleY(1)" },
                },
            },
            animation: {
                squash: "squash 2s ease-in-out",
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                ".user-select-none": {
                    "user-select": "none",
                },
                ".webkit-user-drag-none": {
                    "-webkit-user-drag": "none",
                },
                ".no-drag": {
                    "user-select": "none",
                    "-webkit-user-drag": "none",
                    "user-drag": "none",
                },
            };
            addUtilities(newUtilities, ["responsive", "hover"]);
        },
    ],
};
