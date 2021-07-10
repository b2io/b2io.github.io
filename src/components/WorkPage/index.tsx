import { css } from '@emotion/react';
import NextImage, { ImageProps } from 'next/image';
import NextLink, { LinkProps } from 'next/link';
import type { FC, ReactNode } from 'react';

import { Heading, Layout, Link, Text } from '~/components';
import { colors, spacing } from '~/theme';

const CaseStudyHero: FC = () => {
  return (
    <div
      css={css`
        padding-top: ${spacing.xxl5};
        position: relative;

        *:not(:first-child) {
          position: relative;
          z-index: 2;
        }
      `}
    >
      <div
        css={css`
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
        `}
      >
        <div
          css={css`
            height: 22.5rem;
            position: relative;
          `}
        >
          <NextImage
            alt="abstract collection of product screens"
            layout="fill"
            objectFit="cover"
            priority
            src={require('./color-snap-visualizer-hero.jpg')}
          />
        </div>
      </div>
      <Heading as="h2" variant="h1">
        <Text as="small" variant="body">
          Sherwin-Williams
        </Text>
        <br />
        ColorSnap<sup>&reg;</sup> Visualizer
      </Heading>
      <Text
        as="p"
        css={css`
          margin: ${spacing.sm} 0 0 0;
        `}
        variant="h3"
      >
        Empowering consumers to shop for paint and experience color like never
        before.
      </Text>
      <Link
        css={css`
          margin-top: ${spacing.lg};
        `}
        href="/work/sherwin-williams-colorsnap"
        variant="CTA"
      >
        View more
      </Link>
    </div>
  );
};

type CaseStudyTileProps = {
  client: ReactNode;
  description: ReactNode;
  image: ImageProps;
  link: LinkProps;
  title: ReactNode;
};

const CaseStudyTile: FC<CaseStudyTileProps> = ({
  client,
  description,
  image,
  link,
  title,
}) => {
  return (
    <li
      css={css`
        display: grid;
        gap: ${spacing.xxs};
        padding: 12rem 0 0 ${spacing.sm};
        position: relative;

        *:not(:first-child) {
          position: relative;
          z-index: 2;
        }
      `}
    >
      <NextLink {...link}>
        <a
          css={css`
            text-decoration: none;
          `}
        >
          <div
            css={css`
              background: ${colors.workThumbnailBg};
              left: 0;
              overflow: hidden;
              padding: ${spacing.md} ${spacing.sm};
              position: absolute;
              right: 0;
              top: 0;
            `}
          >
            <NextImage {...image} />
          </div>
          <Heading as="h2" variant="h2">
            <Text as="small" variant="body">
              {client}
            </Text>
            <br />
            {title}
          </Heading>
          <Text
            as="p"
            css={css`
              margin: 0;
            `}
            variant="body"
          >
            {description}
          </Text>
        </a>
      </NextLink>
    </li>
  );
};

export const WorkPage: FC = () => {
  return (
    <Layout title="Work">
      <CaseStudyHero />
      <Heading
        as="h3"
        css={css`
          margin-top: ${spacing.xxl1};
        `}
        variant="h2"
      >
        Unique challenges require unique solutions.
      </Heading>
      <ul
        css={css`
          display: grid;
          gap: ${spacing.xxl2};
          list-style: none;
          margin: 0;
          padding: ${spacing.xxl2} 0;
        `}
      >
        <CaseStudyTile
          client="NetJets"
          description="Cross-platform React Native mobile application"
          image={{
            alt: 'battery consumption screen of the Battery XT web app',
            height: 12 * 16,
            layout: 'fixed',
            src: require('./color-snap-visualizer-hero.jpg'),
            width: 3594,
          }}
          link={{ href: '/work/netjets-fly-netjets' }}
          title="Fly NetJets"
        />
        <CaseStudyTile
          client="AEP"
          description="Custom web-based application"
          image={{
            alt: 'battery consumption screen of the Battery XT web app',
            height: 12 * 16,
            layout: 'fixed',
            src: require('./color-snap-visualizer-hero.jpg'),
            width: 3594,
          }}
          link={{ href: '/work/aep-scopebuilder' }}
          title="ScopeBuilder"
        />
        <CaseStudyTile
          client="DNV•GL"
          description="Responsive web application"
          image={{
            alt: 'battery consumption screen of the Battery XT web app',
            height: 12 * 16,
            layout: 'fixed',
            src: require('./color-snap-visualizer-hero.jpg'),
            width: 3594,
          }}
          link={{ href: '/work/dnv-gl-battery-xt' }}
          title="Battery XT"
        />
      </ul>
    </Layout>
  );
};
