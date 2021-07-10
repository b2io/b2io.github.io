import styled from '@emotion/styled';
import NextLink from 'next/link';
import type { FC } from 'react';
import { variant } from 'styled-system';

import { ThemeLinkVariants } from '~/theme';

export type LinkProps = {
  href: string;
  variant?: ThemeLinkVariants;
};

const Anchor = styled.a<{ variant?: ThemeLinkVariants }>(
  variant({ scale: 'linkVariants' }),
);

export const Link: FC<LinkProps> = ({ href, ...props }) => {
  const isInternal = href.startsWith('/');

  return isInternal ? (
    <NextLink href={href} passHref>
      <Anchor {...props} />
    </NextLink>
  ) : (
    <Anchor href={href} {...props} />
  );
};

Link.defaultProps = {
  variant: 'default',
};

export default Link;
