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
                slideIn: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
                slideFadeIn: {
                    "0%": { transform: "translateX(-100%)", opacity: 0 },
                    "100%": { transform: "translateX(0)", opacity: 1 },
                },
                slideOut: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                slideFadeOut: {
                    "0%": { transform: "translateX(0)", opacity: 1 },
                    "100%": { transform: "translateX(-100%)", opacity: 0 },
                },
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                fadeOut: {
                    "0%": { opacity: 0.6 },
                    "100%": { opacity: 0 },
                },
                squash: {
                    "0%": { transform: "scaleY(0.1)" },
                    "50%": { transform: "scaleY(1.2)" },
                    "100%": { transform: "scaleY(1)" },
                },
                menuMoveLeft: {
                    "0%": { transform: "translateX(0)", width: "100vw" },
                    "100%": { transform: "translateX(0)", width: "370px" },
                },
            },
            animation: {
                slideIn: "slideIn 0.5s ease-out forwards",
                slideOut: "slideOut 0.5s ease-out forwards",
                fadeIn: "fadeIn 0.5s ease-out forwards",
                fadeOut: "fadeOut 0.5s ease-out forwards",
                slideFadeIn: "slideFadeIn 0.5s ease-out forwards",
                slideFadeOut: "slideFadeOut 0.5s ease-out forwards",
                squash: "squash 2s ease-in-out",
                menuMoveLeft: "menuMoveLeft 0.5s ease-out forwards",
            },
            fontFamily: {
                ns: ["NanumSquare"],
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
