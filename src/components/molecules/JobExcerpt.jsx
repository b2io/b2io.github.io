import React from 'react';
import PropTypes from 'prop-types';
import { em } from 'polished';
import styled, { css } from 'styled-components';
import { mediaQuery } from '../../util/style';
import { A as Anchor, H3, P } from '../atoms';

const text = css`
  font-size: ${em('18px')};
  line-height: 1.35;

  ${mediaQuery.medium`
    font-size: ${em('24px')};
  `};
`;

const A = styled(Anchor)`
  ${text};
`;

const Text = styled(P)`
  ${text};
`;

const Wrapper = styled.div`
  margin-bottom: ${em(30)};
`;

function JobExcerpt({ children, heading, url }) {
  return (
    <Wrapper>
      <H3 dark>{heading}</H3>
      <Text>{children}</Text>
      <A href={url}>Learn More</A>
    </Wrapper>
  );
}

JobExcerpt.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default JobExcerpt;
