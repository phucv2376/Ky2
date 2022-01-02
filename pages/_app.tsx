import '../styles/globals.css'
import type { AppProps } from 'next/app'
import img from '../public/img_sources.json';

if (process.browser) {
  const currentHour: number = new Date().getHours();
  if (currentHour >= 19) {
    document.documentElement.style.setProperty("--bgImageUrl", `url(${img.night[Math.floor(Math.random() * img.night.length)]})`);
  } else if (currentHour >= 14) {
    document.documentElement.style.setProperty("--bgImageUrl", `url(${img.afternoon[Math.floor(Math.random() * img.afternoon.length)]})`);
  } else if (currentHour >= 11) {
    document.documentElement.style.setProperty("--bgImageUrl", `url(${img.noon[Math.floor(Math.random() * img.noon.length)]})`);
  } else if (currentHour >= 5) {
    document.documentElement.style.setProperty("--bgImageUrl", `url(${img.morning[Math.floor(Math.random() * img.morning.length)]})`);
  }

}

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
