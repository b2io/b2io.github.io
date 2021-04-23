import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinDesktop, atMinTablet, atMinXXL, cssClamp } from '~/theme';
import { ImageProps } from '~/types';

const largeImageHeightCalc = cssClamp([69.5, 'tablet'], [69.5, 'desktop']);
const imageTopCalc = cssClamp(
  [1.85, 'mobile'],
  [7, 'tablet'],
  [8.25, 'desktop'],
);

const Image: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div
      css={css`
        height: ${cssClamp([32, 'mobile'], [40.438, 'tablet'])};
        position: absolute;
        right: calc(50% - 50vw - 14.25rem);
        top: ${imageTopCalc};
        width: ${cssClamp([32, 'mobile'], [40.438, 'tablet'])};
        ${atMinTablet} {
          height: ${largeImageHeightCalc};
          right: calc(50% - 50vw - 28rem);
          width: ${cssClamp([69.5, 'tablet'], [69.5, 'xxl'])};
        }
        ${atMinXXL} {
          left: calc(50% - 13vw);
        }
      `}
      {...props}
    >
      <NextImage layout="fill" alt={alt} src={src} />
    </div>
  );
};

const HeaderText = styled(Heading)`
  margin-left: ${cssClamp([0, 'tablet'], [6.688, 'desktop'])};
  position: relative;

  .callout {
    display: block;
    left: ${cssClamp([2.813, 'mobile'], [5, 'tablet'], [8.375, 'desktop'])};
    position: relative;
  }

  .large-text {
    display: block;
    position: relative;
    top: -0.3rem;
    ${atMinTablet} {
      top: -1.25rem;
    }
  }
`;

const Content = styled.div`
  margin-left: ${cssClamp([1.688, 'mobile'], [11.563, 'tablet'])};
  margin-top: 6.75rem;
  position: relative;
  ${atMinTablet} {
    margin-top: 9.25rem;
  }
  ${atMinDesktop} {
    margin-left: 7.5rem;
  }
`;

export const FueledByCuriosity: FC = () => {
  return (
    <section
      css={css`
        /* DELETE THESE !!!!!! */
        margin-bottom: 20rem;
        margin-top: 20rem;
        /* DELETE THESE !!!!!! */
        min-height: calc(${imageTopCalc} + ${largeImageHeightCalc});
        position: relative;
      `}
    >
      <Image
        alt="large abstract gradient circle"
        src="/home/large-gradient-circle.png"
      />
      <HeaderText as="h2" variant="hero">
        <Text className="callout" as="span" variant="callout">
          Fueled by
        </Text>
        <span className="large-text">curiosity.</span>
      </HeaderText>
      <Content>
        <div
          css={css`
            max-width: 29.125rem;
            ${atMinDesktop} {
              margin-left: 9rem;
            }
          `}
        >
          <Text variant="h2">
            We’re thoughtful, passionate, and we never settle for “good enough.”
            Undeterred by novel problems, our team tackles each one with
            tenacity, creativity, and excitement.
          </Text>
          <Link
            css={css`
              margin-top: ${theme.spacing.lg};
            `}
            href="/culture"
            variant="CTA"
          >
            See our culture
          </Link>
        </div>
      </Content>
    </section>
  );
};

export default FueledByCuriosity;
