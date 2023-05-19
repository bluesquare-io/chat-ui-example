const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
    content: ["./resources/**/*.{html,js,vue,jsx,php}", "./public/**/*.{html,php}"],

    theme: {
        extend: {
            colors: {
                primary: colors.red,
                secondary: colors.slate,
                info: colors.blue,
                success: colors.green,
                warning: colors.yellow,
                error: colors.red,
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [
        require('@tailwindcss/forms')
    ],
};
