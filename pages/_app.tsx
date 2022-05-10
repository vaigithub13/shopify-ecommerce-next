import { AppProps } from "next/app";
import React from "react";
import { FC } from "react";
import "@assets/main.css";
import { UIProvider } from "@components/ui/context";
import "keen-slider/keen-slider.min.css";

const Noop: FC = ({ children }) => <>{children}</>;

const MyAPp = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) => {
  const Layout = Component.Layout ?? Noop;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
};

export default MyAPp;
