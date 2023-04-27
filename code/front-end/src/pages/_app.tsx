import "@/styles/global.css";
import type { AppProps } from "next/app";
import Context from "@/presentation/contexts/exercicios";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Context.Provider value={{
            exercicios: [],
            _id: ""
      }}>
        <Component {...pageProps} />
      </Context.Provider>
    </>
  );
}
