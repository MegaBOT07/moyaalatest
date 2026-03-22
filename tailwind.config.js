/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Premium Luxury Backgrounds (from client images)
        'luxury-dark': '#2D1320',        // Warm plum (Enduring Beauty bg)
        'luxury-secondary': '#3D1C2A',   // Rich burgundy plum
        'luxury-tertiary': '#1A6B6A',    // Visible rich teal (Moments Made Eternal bg)
        
        // Brand Accents (matching client visuals)
        'primary-wine': '#8B4557',       // Dusty rose-wine (Timeless Elegance bg)
        'secondary-rose': '#9B6B7A',     // Lighter mauve rose
        'ruby-luxury': '#6B2D3E',        // Medium wine
        'teal-luxury': '#1A6B6A',        // Rich visible teal
        'emerald-luxury': '#1A6B6A',     // Alias for teal
        'sapphire-luxury': '#1A6B6A',    // Alias for teal
        'amethyst-luxury': '#6B2D3E',    // Alias for wine
        
        // Premium Gold & Light
        'gold-primary': '#D4AF37',       // Authentic luxury gold
        'gold-soft': '#C5A059',          // Muted champagne gold
        'gold-highlight': '#F1D279',     // Brighter gold reflection
        'platinum': '#FDF8F0',           // Warm cream white
        'rose-gold': '#C4887A',          // Warm rose gold
        
        // Premium Text Colors
        'text-primary': '#FDF8F0',       // Warm cream white
        'text-secondary': '#E8DDD4',     // Soft warm grey
        'text-muted': '#B8A99A',         // Warm taupe
        'text-accent': '#D4AF37',        // Signature gold text
        
        // Glass & Overlay
        'glass-light': 'rgba(255, 255, 255, 0.08)',
        'glass-dark': 'rgba(45, 19, 32, 0.75)',
      },

      fontFamily: {
        'serif': ['Georgia', 'Garamond', 'serif'],
        'sans': ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(212, 175, 55, 0.35)',
        'glow-lg': '0 0 60px rgba(212, 175, 55, 0.25)',
        'glow-ruby': '0 0 40px rgba(139, 69, 87, 0.4)',
        'glow-emerald': '0 0 40px rgba(26, 107, 106, 0.4)',
        'glow-sapphire': '0 0 40px rgba(26, 107, 106, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(212, 175, 55, 0.2)',
        'premium': '0 20px 50px rgba(45, 19, 32, 0.6), 0 0 40px rgba(212, 175, 55, 0.25)',
      },

      backdropFilter: {
        'glass': 'backdrop-filter blur(20px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)' },
          '50%': { boxShadow: '0 0 50px rgba(255, 215, 0, 0.8)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};