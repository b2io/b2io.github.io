import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FC } from 'react';
import { Heading } from '~/components';
import {
  atMinLg,
  atMinDesktop,
  atMinLargeDesktop,
  bp,
  BreakpointName,
} from '~/theme/breakpoints';
import { cssClamp } from '~/theme/util';

type TeamHeroImageSource = {
  largeDesktop: string;
  tablet: string;
  xl: string;
  xs: string;
};

type TeamHeroImageProps = {
  alt: string;
  imgSource: TeamHeroImageSource;
};

type TeamHeroProps = TeamHeroImageProps & {
  text: string;
};

const calculatedImageHeight = cssClamp(
  [17.5, 'smMobile'],
  [20.188, 'mobile'],
  [35, 'tablet'],
);

const Image = styled.picture`
  height: ${calculatedImageHeight};
  position: absolute;
  right: calc(50% - 50vw);

  ${atMinLargeDesktop} {
    margin-left: ${cssClamp([-20, 'largeDesktop'], [-15, 'xlDesktop'])};
  }

  img {
    /* filter: brightness(0.85); */
    height: 100%;
  }
`;

const HeaderText = styled(Heading)`
  padding-top: ${cssClamp([11, 'smMobile'], [16, 'mobile'], [21.5, 'tablet'])};
  position: relative;

  ${atMinLg} {
    max-width: 60rem;
  }

  ${atMinDesktop} {
    left: 33.75rem;
    padding-top: 4.25rem;
  }

  ${atMinLargeDesktop} {
    left: 37.5rem;
  }
`;

const ImageContainer: FC<TeamHeroImageProps> = ({ alt, imgSource }) => {
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

export const TeamHero: FC<TeamHeroProps> = ({
  alt,
  imgSource,
  text,
  ...props
}) => {
  return (
    <section
      css={css`
        position: relative;
        ${atMinDesktop} {
          min-height: ${calculatedImageHeight};
        }
      `}
      {...props}
    >
      <ImageContainer alt={alt} imgSource={imgSource} />
      <HeaderText as="h2" variant="hero" color="coral">
        {text}
      </HeaderText>
    </section>
  );
};
