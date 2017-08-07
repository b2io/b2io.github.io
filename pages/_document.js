import BaseDocument, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

class Document extends BaseDocument {
  static async getInitialProps(...args) {
    const props = await super.getInitialProps(...args);

    return { ...props, helmet: Helmet.renderStatic() };
  }

  render() {
    const { helmet } = this.props;
    const sheet = new ServerStyleSheet();
    const mainEl = sheet.collectStyles(<Main />);
    const styleEls = sheet.getStyleElement();

    return (
      <html lang="en" {...helmet.htmlAttributes.toComponent()}>
        <Head>
          <Helmet title="Base Two" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.link.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.title.toComponent()}
          {styleEls}
        </Head>
        <body {...helmet.bodyAttributes.toComponent()}>
          {mainEl}
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
