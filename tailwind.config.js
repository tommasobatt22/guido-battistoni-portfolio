
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    '--text-step-8': ['clamp(0.2616rem, 0.1462rem + 0.5772vw, 0.8389rem)'],
    '--text-step-7': ['clamp(0.314rem, 0.167rem + 0.7346vw, 1.0486rem)'],
    '--text-step-6': ['clamp(0.3768rem, 0.19rem + 0.934vw, 1.3107rem)'],
    '--text-step-5': ['clamp(0.4521rem, 0.2149rem + 1.1863vw, 1.6384rem)'],
    '--text-step-4': ['clamp(0.5425rem, 0.2414rem + 1.5055vw, 2.048rem)'],
    '--text-step-3': ['clamp(0.651rem, 0.2693rem + 1.909vw, 2.56rem)'],
    '--text-step-2': ['clamp(0.7813rem, 0.2975rem + 2.4188vw, 3.2rem)'],
    '--text-step-1': ['clamp(0.9375rem, 0.325rem + 3.0625vw, 4rem)'],
    '--text-step-0': ['clamp(1.125rem, 0.35rem + 3.875vw, 5rem)'],
    extend: {
      fontSize: {
      },
      letterSpacing: {
        '-tight': '-0.04em',
      },
    },
  },
  plugins: [],
}

