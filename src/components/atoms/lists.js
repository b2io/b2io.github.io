import React from 'react';
import styled from 'styled-components';
import { cssSome } from '../../util/style';

const InlineList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  ${cssSome('centered')`
    text-align: center;
  `};
`;

const InlineListItem = styled.li`
  display: inline-block;
  padding: 1em 2em;
`;

InlineList.Item = InlineListItem;

const List = styled.ul`
  margin: 0;
  padding: 0;

  ${cssSome('centered')`
    text-align: center;
  `};

  ${cssSome('unstyled')`
    list-style: none;
  `};

  > li + li {
    margin-top: 1em;
  }
`;

List.Item = styled.li``;

export { InlineList, List };
