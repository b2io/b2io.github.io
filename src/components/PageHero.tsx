import styled from '@emotion/styled';

import { FC } from 'react';
import { Heading } from '~/components';
import {
  atMinLg,
  atMinDesktop,
  atMinLargeDesktop,
  atMinTablet,
  bp,
  BreakpointName,
} from '~/theme/breakpoints';
import { cssClamp } from '~/theme/util';

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
  margin-left: calc(50% - 50vw);

  ${atMinLargeDesktop} {
    margin-left: ${cssClamp([-20, 'largeDesktop'], [-20, 'xlDesktop'])};
  }

  img {
    filter: brightness(0.85);
    height: ${cssClamp([17.5, 'smMobile'], [20.188, 'mobile'], [35, 'tablet'])};
  }
`;

const HeaderText = styled(Heading)`
  /* bottom: 4.5rem; */
  bottom: ${cssClamp([4.5, 'mobile'], [13.75, 'tablet'])};
  position: relative;

  /* ${atMinTablet} {
    bottom: 13.75rem;
  } */

  ${atMinLg} {
    max-width: 50rem;
  }

  ${atMinDesktop} {
    bottom: 31.5rem;
    left: 33.75rem;
  }

  ${atMinLargeDesktop} {
    left: 32rem;
  }
`;

const ImageContainer: FC<HeroImageProps> = ({ alt, imgSource }) => {
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

export const PageHero: FC<PageHeroProps> = ({ alt, imgSource, text }) => {
  return (
    <section>
      <ImageContainer alt={alt} imgSource={imgSource} />
      <HeaderText as="h1">{text}</HeaderText>
    </section>
  );
};
