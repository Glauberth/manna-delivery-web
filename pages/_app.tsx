import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Provider as AppContextProvider } from "../contexts/app";
import { Provider as AuthContextProvider } from "../contexts/auth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <NextNProgress
          color="#5c3f3f"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
