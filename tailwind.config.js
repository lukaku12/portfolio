/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                title: ['3.7rem', '3.5rem'],
                subTitle: ['2rem', "2rem"],

                bodyText: '1.125rem',
                labelText: '1rem',
                codeSnippet: '0.875rem',
            },

            colors: {
                primary: {
                    'black': '#01080E',
                    'dark-gray': '#011627',
                    'darker-gray': '#011221',
                },

                secondary: {
                    'blue': '#607B96',
                    'light-green': '#3C9D93',
                    'purple': '#4D5BCE',
                    'white': '#FFFFFF',
                },

                accent: {
                    'light-orange': '#FEA55F',
                    'lighter-green': '#43D9AD',
                    'lighter-pink': '#E99287',
                    'lighter-purple': '#C98BDF',
                },

                lines: {
                    gray: '#1E2D3D',
                },
            }
        },
    }
    ,
    plugins: [],
}