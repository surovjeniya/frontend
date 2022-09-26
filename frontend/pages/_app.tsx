import { Layout } from "@/layout/layout/Layout";
import type { AppProps } from "next/app";
import "@/styles/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
