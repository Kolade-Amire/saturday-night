
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primaryColor: '#F1E3D0',
                secondaryColor: '#585656',
                textColorPrimary: '#585656',
                textFaded: '#989494'
            },
        },
    },
    plugins: [],
}