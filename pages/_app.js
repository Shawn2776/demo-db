import '../styles/globals.css'

import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={oswald.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
