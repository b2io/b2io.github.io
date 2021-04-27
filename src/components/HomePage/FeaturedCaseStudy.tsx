import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinSm, atMinTablet, atMinXL, cssClamp } from '~/theme';

const GUTTER_SHIFT = '1.375rem';

const TextContainer = styled.div`
  margin-left: ${cssClamp([1.74375, 'sm'], [5.625, 'tablet'], [7.6125, 'xl'])};
  ${atMinXL} {
    margin-top: 22rem;
    order: 2;
    width: calc(50% - ${GUTTER_SHIFT});
  }
`;

const ImagesContainer = styled.div`
  column-gap: ${theme.spacing.xxs};
  columns: 2;
  ${atMinTablet} {
    column-gap: 2.875rem;
  }
  ${atMinXL} {
    width: calc(50% + ${GUTTER_SHIFT});
  }
`;

type ImageProps = {
  alt: string;
  src: string;
};

const ResponsiveImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div {...props}>
      <NextImage
        alt={alt}
        height={706}
        layout="responsive"
        src={src}
        width={400}
      />
    </div>
  );
};

export const FeaturedCaseStudy: FC = () => {
  return (
    <section
      css={css`
        ${atMinXL} {
          display: flex;
          flex-direction: row;
        }
      `}
    >
      <TextContainer>
        <Heading
          as="h2"
          color="coral"
          css={css`
            margin-bottom: ${theme.spacing.xxs};
          `}
          variant="body"
        >
          Featured case study
        </Heading>
        <Heading
          as="h3"
          css={css`
            margin-bottom: ${theme.spacing.sm};
          `}
          variant="h2"
        >
          ColorSnap&reg;
          <br />
          Visualizer
        </Heading>
        <Text
          css={css`
            max-width: 19rem;
            ${atMinSm} {
              max-width: 30rem;
            }
          `}
          variant="h3"
        >
          As a leader in the paint industry, Sherwin-Williams wanted to create a
          tool worthy of their products - something to get customers excited
          about paint.
        </Text>
        <Link
          css={css`
            margin-bottom: ${theme.spacing.lg};
            margin-top: ${theme.spacing.lg};
            ${atMinTablet} {
              margin-bottom: ${theme.spacing.xxl2};
              margin-top: 3rem;
            }
          `}
          href="/work"
          variant="CTA"
        >
          See our work
        </Link>
      </TextContainer>
      <ImagesContainer>
        <ResponsiveImage
          alt="paint a photo"
          css={css`
            padding-bottom: ${theme.spacing.xs};
            ${atMinTablet} {
              padding-bottom: 2.875rem;
            }
          `}
          src="/home/featured-case-study-home-1.png"
        />
        <ResponsiveImage
          alt="room with window, chair, and sofa"
          src="/home/featured-case-study-home-3.png"
        />
        <ResponsiveImage
          alt="living room and kitchen with sofa"
          css={css`
            padding-bottom: ${theme.spacing.xs};
            padding-top: 50%;
            ${atMinTablet} {
              padding-bottom: 2.875rem;
            }
          `}
          src="/home/featured-case-study-home-2.png"
        />
        <ResponsiveImage
          alt="bedroom with dresser and mirror"
          src="/home/featured-case-study-home-4.png"
        />
      </ImagesContainer>
    </section>
  );
};
