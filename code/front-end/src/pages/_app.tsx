import type { AppProps } from "next/app";
import { memo } from "react";
import GlobalStyle from "@/styles/GlobalStyle";
import { ExerciseProvider } from "@/presentation/contexts/exercicios";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <ExerciseProvider>
        <GlobalStyle />
          <Component {...pageProps} />
      </ExerciseProvider>
    </>
  );
}

export default memo(MyApp)
