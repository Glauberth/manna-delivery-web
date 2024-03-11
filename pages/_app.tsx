import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

import { Provider as AppContextProvider } from "../contexts/app";
import { Provider as AuthContextProvider } from "../contexts/auth";
import GoogleAnalytics from "../src/components/GoogleAnalytics";

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
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
        process.env.NEXT_PUBLIC_AMBIENTE == "production" ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
