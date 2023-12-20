import { AppProps } from "next/app";
// Components
import Nav from "@/components/Nav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          background-color: green;
        }
      `}</style>
    </>
  );
}
