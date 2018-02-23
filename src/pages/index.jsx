import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import {
  ContactUs,
  Clients,
  GlobalNavigation,
  Hero,
  Main,
  ServiceList,
} from '../components';
import { toNodesWithImage } from '../util/graphql';

class IndexPage extends React.Component {
  static defaultProps = {};

  static propTypes = {
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        image: PropTypes.shape({}).isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    services: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        image: PropTypes.shape({}).isRequired,
        imgAlt: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { clients, services } = this.props;

    console.log(clients);

    return (
      <Main>
        <GlobalNavigation />
        <Hero />
        <ServiceList>
          {services.map(service => (
            <ServiceList.Item {...service} key={service.id} />
          ))}
        </ServiceList>
        <Clients />
        <ContactUs />
      </Main>
    );
  }
}

function mapPropsToProps({ data }) {
  return {
    clients: toNodesWithImage(data.clients),
    services: toNodesWithImage(data.services),
  };
}

export default mapProps(mapPropsToProps)(IndexPage);

export const pageQuery = graphql`
  query IndexPageQuery {
    clients: allClientsJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    },
    services: allServicesJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          imgAlt
          heading
          subheading
          description
        }
      }
    }
  }
`;
