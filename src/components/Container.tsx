import styled, { StyledComponent } from '@emotion/styled';

import {
  atMinMd,
  atMinXL,
  atMinXXL,
  atMinDesktop,
  viewMaxWidth,
} from '~/theme';

export const Container: StyledComponent<any> = styled.div(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: theme.spacing.sm,
  paddingRight: theme.spacing.sm,

  [atMinMd]: {
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.lg,
  },

  [atMinXL]: {
    paddingLeft: theme.spacing.xxl,
    paddingRight: theme.spacing.xxl,
  },

  [atMinXXL]: {
    maxWidth: viewMaxWidth.xxl,
  },

  [atMinDesktop]: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));
