/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,html,js,jsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: { colors: {
      primary: {
        paleBlue: "#E0E8FF",
        brightBlue: "#3829E0"
      },
      neutral: {
        veryPaleBlue: "#F5F7FF",
        desaturatedBlue: "#7280A7",
        darkBlue: "#1F2F56",
        mobileBlue: "#827BDD"
      }
    },
    fontFamily: {
      bodyCopy: 
      ["Red Hat Display", "serif"]
    },
    backgroundImage: {
      'hero-pattern': "url('/images/pattern-background-desktop.svg')", 
      'mobile-pattern': "url('/images/pattern-background-mobile.svg')"
    }, 
    screens: {
      'xxs': '375px'
    } 
  },
  },
  plugins: [],
  safelist: [
    'bg-[url("/images/illustration-hero.svg")]',
    'bg-[url("/images/pattern-background-mobile.svg")]',
    'bg-[url("/images/pattern-background-desktop.svg")]'
  ]
}

