/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    sm: '100%',
                    md: '100%',
                    lg: '1170px',
                    xl: '1170px',
                    '2xl': '1170px',
                },
            },
            colors: {
                mainBackground: '#f4f9fc',
                mainBlue: '#1cbcff',
                mainBlueHover: '#11adef',
                blueTextDark: '#1d2e3b',
                grayTextColor: '#4d5256',
            },
            fontSize: {
                'xxs': '0.7rem',
                'md': '15px',
            },
            fontFamily: {
                handWriting: ['Caveat', 'handwriting'],
                inter: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                blueBtn: '0px 4px 8px 0px rgba(0,28,56,0.15)',
                containerShadow: '0px 0px 20px 0px rgba(0, 28, 56, 0.2)',
            },
            backgroundImage: {
                bgGradient1: 'linear-gradient(90deg, rgb(244, 249, 252) 49.00%, rgb(224, 236, 251) 100.00%)',
                bgGradient2: 'linear-gradient(180deg, rgb(224, 236, 251) 0.00%, rgb(244, 249, 252) 100.00%)',
                bgGradient3: 'linear-gradient(90deg, rgb(224, 236, 251) 9.00%, rgb(244, 249, 252) 66.00%)',
                bgGradient4: 'linear-gradient(180deg, rgb(244, 249, 252) 16.00%, rgb(255, 255, 255) 39.00%);',
            }
        },
    },
    plugins: [],
}