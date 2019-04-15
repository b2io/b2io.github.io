import PropTypes from 'prop-types';
import React from 'react';

function Html({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents,
}) {
  /* eslint-disable react/no-danger */
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="/img/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/img/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/img/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link color="black" href="/img/safari-pinned-tab.svg" rel="mask-icon" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,100i,400,500"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Anonymous+Pro"
          rel="stylesheet"
        />
        <title>Base Two</title>
        {headComponents}
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
    </html>
  );
  /* eslint-enable react/no-danger */
}

Html.defaultProps = {
  body: null,
  bodyAttributes: {},
  headComponents: null,
  htmlAttributes: {},
  postBodyComponents: null,
  preBodyComponents: null,
};

Html.propTypes = {
  body: PropTypes.node,
  bodyAttributes: PropTypes.shape({}),
  headComponents: PropTypes.node,
  htmlAttributes: PropTypes.shape({}),
  postBodyComponents: PropTypes.node,
  preBodyComponents: PropTypes.node,
};

export default Html;
