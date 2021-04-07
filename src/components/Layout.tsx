import { css, useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import React, { FC } from 'react';

import { Container, Header, Footer } from './';
import styled from '@emotion/styled';
import { onlyXs } from '~/breakpoints';

const Root = styled.div`
  overflow: hidden;
`;

export type LayoutProps = {
  title?: string;
};

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const mainVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: { scale: 0.5, opacity: 0, transition },
};

export const Layout: FC<LayoutProps> = ({ children, title = 'Base Two' }) => {
  const theme = useTheme();
  return (
    <Root>
      <Head>
        <title>{title ? `${title} | Base Two` : 'Base Two'}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <motion.main
        animate="enter"
        css={css`
          margin-top: 9.125rem;
        `}
        exit="exit"
        initial="initial"
        variants={mainVariants}
      >
        <Container>{children}</Container>
      </motion.main>
      <Container
        as="footer"
        css={css`
          ${onlyXs} {
            background-color: ${theme.colors.darkBlueAlt};
          }
        `}
      >
        <Footer />
      </Container>
    </Root>
  );
};
