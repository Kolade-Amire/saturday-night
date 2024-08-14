
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
                secondaryColor: 'rgba(45,43,43,0.84)',
                textColorPrimary: '#585656',
                textFaded: '#989494'
            },
        },
    },
    plugins: [],
}