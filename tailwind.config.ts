import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        lg: ['0.875rem', '1.125rem'],
        xl: ['1rem', '1.43rem'],
        base: ['0.81rem', '1.18rem'],
        '2xl': ['1.2rem', '1.9rem'],
        sm: ['0.688rem', '1rem'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
