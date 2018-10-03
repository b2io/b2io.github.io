import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em } from 'polished';
import { UL, LI, Img } from '../atoms';
import { mediaQuery } from '../../util/style';

const ClientList = styled(UL)`
  background: url('/img/backgrounds/space-fog-purple.png') bottom center / auto
    100% no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const Client = styled(LI)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: ${em('30px')} 0;
  padding: 0 ${em('16px')};
  width: 50%;

  ${mediaQuery.small`
    width: 25%;
  `};

  > div {
    text-align: center;
    width: 100%;
  }
`;

const ClientLogo = styled(Img)`
  max-height: ${em('80px')};
  max-width: 100%;
  width: auto;

  ${mediaQuery.large`
    max-height: ${em('155px')};
    max-width: ${em('200px')};
  `};
`;

function ClientListItem() {
  const { image, name } = this.props;

  return (
    <Client>
      <ClientLogo {...image} alt={name} title={name} />
    </Client>
  );
}

ClientListItem.propTypes = {
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
};

ClientList.Item = ClientListItem;

export default ClientList;
