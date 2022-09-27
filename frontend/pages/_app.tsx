import { Layout } from "@/layout/layout/Layout";
import type { AppProps } from "next/app";
import "@/styles/global.scss";
import { wrapper } from "@/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
