import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export const latoClass = lato.className;
