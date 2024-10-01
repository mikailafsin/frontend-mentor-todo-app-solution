/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                attributionLink: "hsl(228, 45%, 44%)",

                primaryBrightBlue: "hsl(220, 98%, 61%)",
                primaryCheckBackground:
                    "linear-gradient(to right, hsl(192, 100%, 67%) , hsl(280, 87%, 65%))",

                veryLightGray: "hsl(0, 0%, 98%)",
                veryLightGrayishBlue: "hsl(236, 33%, 92%)",
                grayishBlue: "hsl(233, 11%, 84%)",
                darkGrayishBlue: "hsl(236, 9%, 61%)",
                veryDarkGrayishBlue: "hsl(235, 19%, 35%)",

                veryDarkBlue: "hsl(235, 21%, 11%)",
                veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
                lightGrayishBlue: "hsl(234, 39%, 85%)",
                lightGrayishBlueHover: "hsl(236, 33%, 92%)",
                darkGrayishBlue: "hsl(234, 11%, 52%)",
                veryDarkGrayishBlue: "hsl(233, 14%, 35%)",
            },
            fontFamily: {
                josefin: ["Josefin Sans, sans-serif"],
            },
            backgroundImage: {
                "desktop-dark": "url('./images/bg-desktop-dark.jpg')",
                "desktop-light": "url('./images/bg-desktop-light.jpg')",
                "mobile-dark": "url('./images/bg-mobile-dark.jpg')",
                "mobile-light": "url('./images/bg-mobile-light.jpg')",
                "icon-moon": "url('./images/icon-moon.svg')",
                "icon-sun": "url('./images/icon-sun.svg')",
                "icon-check": "url('./images/icon-check.svg')",
                "icon-cross": "url('./images/icon-cross.svg')",
            },
        },
    },
    plugins: [],
};
