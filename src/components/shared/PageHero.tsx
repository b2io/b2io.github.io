import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FC } from 'react';
import { Heading } from '~/components';
import {
  atMinLargeDesktop,
  atMinLg,
  atMinTablet,
  atMinXL,
  bp,
  BreakpointName,
} from '~/theme/breakpoints';
import { cssClamp } from '~/theme/util';
import { spacing } from '~/theme/spacing';

type HeroImageSource = {
  largeDesktop: string;
  tablet: string;
  xl: string;
  xs: string;
};

type HeroImageProps = {
  alt: string;
  imgSource: HeroImageSource;
};

type PageHeroProps = HeroImageProps & {
  text: string;
};

const Image = styled.picture`
  margin-left: -${spacing.sm};
  ${atMinTablet} {
    margin-left: -${spacing.lg};
  }
  ${atMinXL} {
    margin-left: -${spacing.xxl};
  }
  ${atMinLargeDesktop} {
    margin-left: -20rem;
  }
  img {
    filter: brightness(0.75);
    height: ${cssClamp([17.5, 'smMobile'], [20.188, 'mobile'], [35, 'tablet'])};
  }
`;

const HeaderText = styled(Heading)`
  bottom: 4.5rem;
  position: relative;
  ${atMinTablet} {
    bottom: 13.75rem;
    font-size: 6.25rem;
  }
  ${atMinLg} {
    max-width: 50rem;
  }
`;

const ImageContainer: FC<HeroImageProps> = ({ alt, imgSource }) => {
  const sortedImgSourcesDescending = Object.entries(imgSource).sort(
    ([breakpointA], [breakpointB]) => {
      const valueA = breakpointA as BreakpointName;
      const valueB = breakpointB as BreakpointName;
      return bp[valueB] - bp[valueA];
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

export const PageHero: FC<PageHeroProps> = ({
  alt,
  imgSource,
  text,
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
      <HeaderText as="h1">{text}</HeaderText>
    </section>
  );
};
