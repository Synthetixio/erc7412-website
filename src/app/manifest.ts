import type { MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  short_name: 'ERC-7412',
  name: 'ERC-7412',
  lang: 'en',
  start_url: '/',
  background_color: '#000000',
  theme_color: '#000000',
  dir: 'ltr',
  display: 'standalone',
  prefer_related_applications: false,
  /*
  icons: [
    {
      src: '/vercel.svg',
      purpose: 'any',
      sizes: '48x48 72x72 96x96 128x128 256x256',
    },
  ],
  */
});

export default manifest;
