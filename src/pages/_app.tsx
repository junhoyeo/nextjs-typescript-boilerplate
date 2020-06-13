import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Normalize } from 'styled-normalize';

import GlobalStyles from '../components/GlobalStyles';

type AppProps = {
  Component: React.ReactNode,
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Example title</title>
          <meta name="description" content="Example description" />
        </Head>
        <>
          <Normalize />
          <GlobalStyles />
          <Component {...pageProps} />
        </>
      </>
    );
  }
}
