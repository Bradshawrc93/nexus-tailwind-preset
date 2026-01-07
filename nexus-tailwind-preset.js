/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#00bad6",
        "secondary-accent": "#F03A70",
        "background-light": "#f5f8f8",
        "background-dark": "#0f1115",
        "surface-dark": "#1E2125",
        "text-muted": "#929DA8",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 20px -5px rgba(0, 186, 214, 0.3)",
        "glow-hover": "0 0 25px -5px rgba(0, 186, 214, 0.5)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out forwards 1s",
      },
    },
  },
  plugins: [
    ({ addBase, addUtilities, theme }) => {
      // Global Base Styles
      addBase({
        'body': {
          backgroundColor: "#0f1115", // background-dark
          color: "white",
          fontFamily: theme('fontFamily.body'),
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        'html': {
          scrollBehavior: 'smooth',
        }
      });

      addUtilities({
        ".nexus-container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@screen md": {
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
          maxWidth: "1400px",
        },
        ".nexus-nav-brand": {
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          fontWeight: "700",
          fontSize: "1.25rem",
          letterSpacing: "-0.025em",
          fontFamily: theme('fontFamily.display'),
        },
        ".nexus-nav-icon": {
          height: "2rem",
          width: "2rem",
          borderRadius: "0.5rem",
          backgroundColor: "rgba(0, 186, 214, 0.2)", // primary/20
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#00bad6", // primary
        },
        ".nexus-nav-menu-btn": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "2.5rem",
          height: "2.5rem",
          borderRadius: "0.5rem",
          color: "#929DA8", // text-muted
          transitionProperty: "color, background-color",
          transitionDuration: "200ms",
          "&:hover": {
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        },
        ".nexus-drawer": {
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "300px",
          backgroundColor: "#1E2125", // surface-dark
          borderLeftWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          transitionProperty: "transform",
          transitionDuration: "300ms",
          zIndex: 70,
        },
        ".glass-panel": {
          backgroundColor: "rgba(30, 33, 37, 0.7)",
          borderWidth: "1px",
          borderColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        },
        ".tech-grid-bg": {
          backgroundSize: "40px 40px",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        },
        ".chart-gradient": {
          fill: "url(#gradient)",
        },
      });
    },
  ],
};
