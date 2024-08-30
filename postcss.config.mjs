/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // Doporučeno pro lepší kompatibilitu s prohlížeči
  },
};

export default config;
