import "@/styles/global.css";
import type { AppProps } from "next/app";
import { ExerciseProvider } from "@/presentation/contexts/exercicios";

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ExerciseProvider>
        <Component {...pageProps} />
      </ExerciseProvider>
    </>
  );
}
