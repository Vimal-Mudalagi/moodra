module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0d12',
        offwhite: '#f8f7fa',
        amber: '#ffe066',
        lilac: '#bfa3ff',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        spacemono: ['Space Mono', 'monospace'],
      },
      boxShadow: {
        mood: '0 0 16px 4px',
      },
    },
  },
  plugins: [],
};
