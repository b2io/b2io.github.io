import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { FC } from 'react';
import { Heading } from './Heading';
import {
  atMinLg,
  atMinDesktop,
  atMinLargeDesktop,
  bp,
  BreakpointName,
} from '~/theme/breakpoints';
import { spacing } from '~/theme/spacing';
import { cssClamp } from '~/theme/util';

type TeamHeroImageSource = {
  desktop: string;
  tablet: string;
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
  [21.938, 'mobile'],
  [35, 'tablet'],
  [37.5, 'desktop'],
);

const Image = styled.picture`
  height: ${calculatedImageHeight};
  position: absolute;
  right: calc(50% - 50vw);

  ${atMinDesktop} {
    right: -${spacing.xxl3};
  }

  ${atMinLargeDesktop} {
    margin-left: ${cssClamp([-20, 'largeDesktop'], [-15, 'xlDesktop'])};
  }

  img {
    height: 100%;
  }
`;

const HeaderText = styled(Heading)`
  padding-left: ${cssClamp([0, 'xl'], [19, 'desktop'])};
  padding-top: ${cssClamp(
    [16, 'smMobile'],
    [20.5, 'mobile'],
    [26, 'sm'],
    [28.5, 'tablet'],
  )};
  position: relative;
  z-index: 1;

  ${atMinLg} {
    white-space: nowrap;
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
        min-height: ${calculatedImageHeight};
        position: relative;
      `}
      {...props}
    >
      <ImageContainer alt={alt} imgSource={imgSource} />
      <HeaderText as="h2" variant="teamHero" color="coral">
        {text}
      </HeaderText>
    </section>
  );
};
