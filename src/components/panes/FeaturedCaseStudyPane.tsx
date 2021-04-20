import { css } from '@emotion/react';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';

import { Heading, Link, Text } from '~/components';
import theme, { atMinSm, atMinMd, atMinXL, cssClamp } from '~/theme';

// TODO: all images are temp and should be replaced

type ImageProps = {
  alt: string;
  src: string;
};

const FeaturedCaseStudyWrapper = styled.section`
  /* DELETE BELOW: JUST FOR VISUAL REFERENCE IN DEVELOPMENT */
  margin-top: 20rem;
  margin-bottom: 20rem;
  /* DELETE ABOVE: JUST FOR VISUAL REFERENCE IN DEVELOPMENT */
  display: flex;
  flex-direction: column;
  ${atMinXL} {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  margin-left: ${cssClamp([1.74375, 'sm'], [5.625, 'md'], [7.6125, 'xl'])};
  ${atMinXL} {
    margin-top: 35%;
    order: 2;
    // width: the -22px accounts for the left four panel images content leaking over the gutter
    width: calc(50% - 22px);
  }
`;

const ImagesContainer = styled.div`
  columns: 2;
  column-gap: ${theme.spacing.xxs};
  ${atMinMd} {
    column-gap: 2.875rem;
  }
  ${atMinXL} {
    // width: the +22px accounts for the left four panel images content leaking over the gutter
    width: calc(50% + 22px);
  }
  > div {
    break-inside: avoid;
  }
`;

const ResponsiveImage: FC<ImageProps> = ({ alt, src, ...props }) => {
  return (
    <div {...props}>
      <NextImage
        layout="responsive"
        alt={alt}
        src={src}
        width={400}
        height={706}
      />
    </div>
  );
};

export const FeaturedCaseStudyPane: FC = () => {
  return (
    <FeaturedCaseStudyWrapper>
      <TextContainer>
        <Heading
          as="h2"
          variant="body"
          color="coral"
          css={css`
            margin-bottom: ${theme.spacing.xxs};
          `}
        >
          Featured case study
        </Heading>
        <Heading
          as="h3"
          variant="h2"
          css={css`
            margin-bottom: ${theme.spacing.sm};
          `}
        >
          ColorSnap&reg;
          <br />
          Visualizer
        </Heading>
        <Text
          variant="h3"
          css={css`
            max-width: 19rem;
            ${atMinSm} {
              max-width: 30rem;
            }
            // TODO: the font styles should be done a different way, just not sure how yet
            ${atMinMd} {
              font-size: 1.063rem;
              line-height: 1.65;
            }
          `}
        >
          As a leader in the paint industry, Sherwin-Williams wanted to create a
          tool worthy of their products - something to get customers excited
          about paint.
        </Text>
        <Link
          css={css`
            margin-top: ${theme.spacing.lg};
            margin-bottom: ${theme.spacing.lg};
            &::after {
              margin-top: 0.25rem;
            }
            ${atMinMd} {
              margin-bottom: ${theme.spacing.xxl2};
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
          alt="case study image"
          src="/home/img-sw-home-1@3x_TEMP.png"
          css={css`
            padding-bottom: ${theme.spacing.xs};
            ${atMinMd} {
              padding-bottom: 2.875rem;
            }
          `}
        />
        <ResponsiveImage
          alt="case study image"
          src="/home/img-sw-home-3@3x_TEMP.png"
        />
        <ResponsiveImage
          alt="case study image"
          src="/home/img-sw-home-2@3x_TEMP.png"
          css={css`
            padding-bottom: ${theme.spacing.xs};
            padding-top: 50%;
            ${atMinMd} {
              padding-bottom: 2.875rem;
            }
          `}
        />
        <ResponsiveImage
          alt="case study image"
          src="/home/img-sw-home-4@3x_TEMP.png"
        />
      </ImagesContainer>
    </FeaturedCaseStudyWrapper>
  );
};

export default FeaturedCaseStudyPane;
