/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Karla: ["Karla", "sans-serif"],
            },
            colors: {
                "light-coffee": "#C89F94",
            },
            keyframes: {
                slideDown: {
                    from: {
                        
                        height: 0,
                        // transform: "translateY(-100%)",
                    },

                    to: {
                      
                        height: 'auto',
                        // transform: "translateY(0)",
                    },
                },
            },
            animation: {
                slideDown: "slideDown .5s ease-out",
            },
        },
    },
    plugins: [],
};
