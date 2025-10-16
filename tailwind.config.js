/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            cursor: {
                'custom': 'url("/cursor.png"), auto',
                'custom-pointer': 'url("/pointer.png"), pointer',
            },
        },
    },
    plugins: [],
}
