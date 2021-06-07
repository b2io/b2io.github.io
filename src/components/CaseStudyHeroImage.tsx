import styled from '@emotion/styled';
import type { FC } from 'react';

import { atMinLg, cssClamp } from '~/theme';
import type { ImageProps } from '~/types';

const ImageContainer = styled.div`
  height: 20.188rem;
  height: ${cssClamp([20.188, 'smMobile'], [50, 'desktop'])};
  ${atMinLg} {
    margin: auto;
    max-width: 74.875rem;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
  width: 100%;
`;

export const CaseStudyHeroImage: FC<ImageProps> = ({ alt, src }) => {
  return (
    <ImageContainer>
      <Image src={src} alt={alt} />
    </ImageContainer>
  );
};
