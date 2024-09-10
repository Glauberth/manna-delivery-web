import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

// import { Provider as AppContextProvider } from "../contexts/app";
// import { Provider as AuthContextProvider } from "../contexts/auth";
import GoogleAnalytics from "../src/components/GoogleAnalytics";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../src/services/queryClient";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importa o CSS necessário

import { useTenantStore } from "../src/store/TenantStore";

//Aqui serve pra ficar escutando as mudanças no state do zustand
process.env.NEXT_PUBLIC_AMBIENTE == "development" && useTenantStore.subscribe((state) => console.log({ ApenasModoDev: state }));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <AuthContextProvider> */}
      {/* <AppContextProvider> */}
      <NextNProgress color="#5c3f3f" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && process.env.NEXT_PUBLIC_AMBIENTE == "production" ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <ReactQueryDevtools />
      </QueryClientProvider>
      {/* </AppContextProvider> */}
      {/* </AuthContextProvider> */}
    </>
  );
}

export default MyApp;
