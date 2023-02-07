import "@/styles/globals.css";
import { Open_Sans } from "@next/font/google";
import { AnimatePresence } from "framer-motion";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }) {
  return (
    // <AnimatePresence initial={false}>
    <main className={openSans.className}>
      <Component {...pageProps} />
    </main>
    // </AnimatePresence>
  );
}
