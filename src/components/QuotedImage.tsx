import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import { Heading, Text } from '~/components';

import { bp, BreakpointName } from '~/theme/breakpoints';
import { spacing } from '~/theme/spacing';
import { cssClamp } from '~/theme/util';

type QuotedImageSource = {
  desktop: string;
  tablet: string;
  xs: string;
};

type ImageProps = {
  alt: string;
  imgSource: QuotedImageSource;
};

type QuotedImageProps = ImageProps & {
  company: string;
  name: string;
  position: string;
  quote: string;
};

const calculatedImageHeight = cssClamp([15, 'mobile'], [50, 'tablet']);

const Image = styled.picture`
  height: ${calculatedImageHeight};
  position: absolute;
  right: calc(50% - 50vw);

  img {
    height: 100%;
  }
`;

const ImageContainer: FC<ImageProps> = ({ alt, imgSource }) => {
  const sortedImgSourcesDescending = Object.entries(imgSource).sort(
    ([breakpointA], [breakpointB]) => {
      const keyA = breakpointA as BreakpointName;
      const keyB = breakpointB as BreakpointName;
      return bp[keyB] - bp[keyA];
    },
  );

  return (
    <Image>
      {sortedImgSourcesDescending.map(([breakpointName, imgSource]) => {
        const breakpointValue = breakpointName as BreakpointName;
        return (
          <source
            key={breakpointName}
            media={`(min-width: ${bp[breakpointValue]}px)`}
            srcSet={imgSource}
          />
        );
      })}
      <img alt={alt} />
    </Image>
  );
};

const TextContainer = styled.div`
  padding-top: 5rem;
  position: relative;
`;

const AttributionText = styled(Text)`
  line-height: 0.85rem;
`;

export const QuotedImage: FC<QuotedImageProps> = ({
  alt,
  company,
  imgSource,
  name,
  position,
  quote,
  ...props
}) => {
  return (
    <section
      css={css`
        position: relative;
      `}
      {...props}
    >
      <ImageContainer alt={alt} imgSource={imgSource} />
      <TextContainer>
        <Text variant="mobileQuotation">&ldquo;</Text>
        <Heading
          as="h2"
          variant="h2"
          css={css`
            margin-bottom: ${spacing.md};
          `}
        >
          {quote}
        </Heading>
        <AttributionText color="coral">{name}</AttributionText>
        <AttributionText>{position}</AttributionText>
        <AttributionText>{company}</AttributionText>
      </TextContainer>
    </section>
  );
};
