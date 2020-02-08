import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { mapProps } from 'recompose';
import { graphql } from 'gatsby';
import { GlobalNavigation, JobsContent, JobsHeader } from '../../components';
import { JobsMain } from '../../components/organisms/jobs/common';
import { toNodes } from '../../util/graphql';

function JobsPage({ jobs }) {
  return (
    <JobsMain>
      <GlobalNavigation />
      <JobsHeader />
      <JobsContent jobs={jobs} />
    </JobsMain>
  );
}

JobsPage.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }),
  ),
};

JobsPage.defaultProps = {
  jobs: [],
};

function mapPropsToProps({ data }) {
  return {
    jobs: !isEmpty(data)
      ? toNodes(data.jobs, node => ({ ...node.frontmatter }))
      : [],
  };
}

export default mapProps(mapPropsToProps)(JobsPage);

export const pageQuery = graphql`
  query JobsPageQuery {
    jobs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/_content/jobs/" }
        frontmatter: { position: { ne: null }, active: { ne: false } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            path
            position
          }
        }
      }
    }
  }
`;
