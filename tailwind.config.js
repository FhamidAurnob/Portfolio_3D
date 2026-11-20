/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05040f",
        panel: "#0c0a1d",
        line: "rgba(255,255,255,0.08)",
        violet: { DEFAULT: "#8b5cf6", soft: "#a78bfa" },
        cyan: { DEFAULT: "#22d3ee" },
        gold: { DEFAULT: "#f5c451" },
        secondary: "#a9a6c2",
        primary: "#05040f",
        tertiary: "#151030",
      },
      fontFamily: {
        display: ['"Syne"', "sans-serif"],
        body: ['"Manrope"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      screens: { xs: "450px" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        "marquee-rev": { from: { transform: "translateX(-50%)" }, to: { transform: "translateX(0)" } },
        aurora: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(8%,-6%) scale(1.15)" },
          "66%": { transform: "translate(-6%,8%) scale(0.92)" },
        },
        shimmer: { from: { backgroundPosition: "0% 50%" }, to: { backgroundPosition: "200% 50%" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        rain: { from: { transform: "translateY(-20px)", opacity: 0 }, "30%": { opacity: 1 }, to: { transform: "translateY(90px)", opacity: 0 } },
        drift: { "0%,100%": { transform: "translateX(0)" }, "50%": { transform: "translateX(26px)" } },
        ping2: { "0%": { transform: "scale(1)", opacity: 0.7 }, "100%": { transform: "scale(2.4)", opacity: 0 } },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-rev": "marquee-rev 38s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        float: "float 6s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
        rain: "rain 1.1s linear infinite",
        drift: "drift 7s ease-in-out infinite",
        ping2: "ping2 2s cubic-bezier(0,0,.2,1) infinite",
        "spin-slow": "spin 18s linear infinite",
      },
    },
  },
  plugins: [],
};
