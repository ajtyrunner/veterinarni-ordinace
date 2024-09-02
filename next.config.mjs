// next.config.js nebo next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'drive.google.com', // nebo jiná doména, ze které stahujete obrázky
          port: '', // volitelně, pokud používáte specifický port
          pathname: '/uc', // volitelně, pokud je potřeba specifikovat cestu
        },
      ],
    },
  };
  