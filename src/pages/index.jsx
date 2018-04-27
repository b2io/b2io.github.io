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
  Technologies,
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
    technologies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        image: PropTypes.shape({}).isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { clients, services, technologies } = this.props;

    return (
      <Main>
        <GlobalNavigation />
        <Hero />
        <ServiceList id="services">
          {services.map(service => (
            <ServiceList.Item {...service} key={service.id} />
          ))}
        </ServiceList>
        <Technologies technologies={technologies} />
        <Clients clients={clients} />
        <ContactUs />
      </Main>
    );
  }
}

function mapPropsToProps({ data }) {
  return {
    clients: toNodesWithImage(data.clients),
    services: toNodesWithImage(data.services),
    technologies: toNodesWithImage(data.technologies),
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
    }
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
    technologies: allTechnologiesJson {
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
    }
  }
`;
