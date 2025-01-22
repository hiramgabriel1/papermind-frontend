import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const ralewayClass = raleway.className;
