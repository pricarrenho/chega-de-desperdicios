import type { AppProps } from "next/app";
import { Layout } from "@/components/Layout";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fallback: pageProps.fallback || {} }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
