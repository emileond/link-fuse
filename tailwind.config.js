/* eslint-disable no-undef */
const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: '#efefff',
              100: '#9393f4',
              200: '#7777e8',
              300: '#6969dc',
              400: '#5d5dcf',
              500: '#5050bf',
              600: '#4040a3',
              700: '#2b2b76',
              800: '#1b1b52',
              900: '#151542',
              DEFAULT: '#5050bf',
            },
            secondary: {
              50: '#cffef6',
              100: '#abfcef',
              200: '#76f5e0',
              300: '#47ead0',
              400: '#1fdabc',
              500: '#00c4a4',
              600: '#07B094',
              700: '#177f6d',
              800: '#19584d',
              900: '#14332e',
              DEFAULT: '#07B094',
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: '#151542',
              100: '#1b1b52',
              200: '#2b2b76',
              300: '#4040a3',
              400: '#5050bf',
              500: '#5d5dcf',
              600: '#6969dc',
              700: '#7777e8',
              800: '#9393f4',
              900: '#efefff',
              DEFAULT: '#5d5dcf',
            },
            secondary: {
              50: '#14332e',
              100: '#195855',
              200: '#19584d',
              300: '#07B094',
              400: '#00c4a4',
              500: '#1fdabc',
              600: '#47ead0',
              700: '#76f5e0',
              800: '#abfcef',
              900: '#cffef6',
              DEFAULT: '#00c4a4',
            },
          },
        },
      },
    }),
  ],
}
