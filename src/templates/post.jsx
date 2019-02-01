import grayMatter from 'gray-matter';
import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import remark from 'remark';
import styled from 'styled-components';
import remarkReact from 'remark-react';
import { mediaQuery, themed } from '../util/style';
import {
  A,
  Blockquote,
  Code,
  Del,
  EM,
  GlobalNavigation,
  Header,
  H1,
  H5,
  HR,
  LI,
  Main,
  P,
  Pre,
  OL,
  Section,
  Strong,
  Time,
  UL,
} from '../components';
import { toNodes } from '../util/graphql';

const PostByline = styled.span`
  font-size: ${em('18px')};

  ${mediaQuery.smedium`
    font-size: ${em('24px')};
  `};
`;

const PostHeader = styled(Header)`
  align-items: center;
  background-color: ${themed('color.black')};
  background-image: url('/img/backgrounds/space-fog-purple.png'),
    url('/img/backgrounds/star-field.png');
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  height: auto;
  margin-top: ${em('48px')};
  padding-bottom: ${em('28px')};
  padding-top: ${em('28px')};

  ${mediaQuery.medium`
    min-height: 530px;
  `};
`;

const PostHeaderInfo = styled.div`
  flex: 1;

  ${mediaQuery.large`
  flex: 3;
`};
`;

const PostHeaderImage = styled.div`
  display: none;
  flex: 1;

  img {
    max-width: 80%;
  }

  ${mediaQuery.smedium`
    display: block;
    text-align:right;
  `};

  ${mediaQuery.large`
    flex: 2;
  `};
`;

const PostTime = styled.span`
  text-transform: uppercase;

  ${mediaQuery.medium`
    font-size: ${em('18px')};
  `};
`;

const PostTitle = styled.h1`
  color: ${themed('color.white')};
  font-size: ${em('36px')};
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: ${em('30px', '36px')};
  margin-top: 0;

  ${mediaQuery.small`
    font-size: ${em('52px')};
    margin-bottom: ${em('32px', '52px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('72px')};
    margin-bottom: ${em('32px', '72px')};
  `};
`;

const PostMeta = styled.div`
  color: ${themed('color.white')};
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

const PostContent = styled(Section)`
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: ${em('27px', '18px')};
  max-width: 720px;
  margin: 0 auto;
  padding-top: ${em('36px', '18px')};

  img {
    max-width: 100%;
  }

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    line-height: ${em('33px', '21px')};
    padding: ${em('75px', '21px')}; 0 0;
  `};
`;

const PostText = styled(P)`
  margin: 0 0 ${em('21px', '21px')};
`;

const PostContentH2 = styled.h2`
  font-size: ${em('30px', '18px')};
  margin: ${em('36px', '34px')} 0 ${em('18px', '30px')};

  ${mediaQuery.small`
    font-size: ${em('34px', '21px')};
    margin: ${em('42px', '34px')} 0 ${em('21px', '34px')};
  `};
`;

const PostContentH3 = styled.h3`
  font-size: ${em('20px', '18px')};
  margin: ${em('30px', '20px')} 0 ${em('14px', '20px')};

  ${mediaQuery.small`
    font-size: ${em('24px', '21px')};
    margin: ${em('36px', '24px')} 0 ${em('16px', '24px')};
  `};
`;

const PostContentH4 = styled.h4`
  font-size: ${em('34px', '18px')};
  margin: ${em('36px', '34px')} 0 0;

  ${mediaQuery.small`
    font-size: ${em('21px', '21px')};
    margin: ${em('30px', '21px')} 0 ${em('16px', '21px')};
  `};
`;

const PostImg = styled.img`
  margin: ${em('18px', '18px')} 0;

  ${mediaQuery.small`
    margin: ${em('21px', '21px')} 0;
  `};
`;

const HoistChildren = props =>
  React.Children.map(props.children, child => child.props.children);

const markdownToElement = md =>
  remark()
    .use(remarkReact, {
      remarkReactComponents: {
        a: A,
        blockquote: Blockquote,
        code: Code,
        del: Del,
        em: EM,
        h1: H1,
        h2: PostContentH2,
        h3: PostContentH3,
        h4: PostContentH4,
        h5: H5,
        hr: HR,
        img: PostImg,
        li: LI,
        ol: OL,
        p: PostText,
        pre: Pre,
        strong: Strong,
        ul: UL,
      },
    })
    .processSync(md).contents;

// TODO: Add `content` prop to GraphQL remark nodes via plugin.
const markdown = raw => (
  <HoistChildren>{markdownToElement(grayMatter(raw).content)}</HoistChildren>
);

function PostTemplate({ author, children, date, title }) {
  return (
    <Main>
      <GlobalNavigation />
      <PostHeader>
        <PostHeaderInfo>
          <PostTitle>{title}</PostTitle>
          <PostMeta>
            {author && <PostByline>Posted by {author}</PostByline>}
            <PostTime>
              <Time iso={date} />
            </PostTime>
          </PostMeta>
        </PostHeaderInfo>
        <PostHeaderImage>
          <img src="/img/monitor-constellation.png" alt="" />
        </PostHeaderImage>
      </PostHeader>
      <PostContent>{children}</PostContent>
    </Main>
  );
}

PostTemplate.defaultProps = { author: '' };

PostTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  author: PropTypes.string,
};

function mapPropsToProps({ data }) {
  // TODO: Find a way to resolve the author name more easily.
  const authorIdToName = toNodes(data.authors).reduce(
    (hashMap, { id, name }) => ({ ...hashMap, [id]: name }),
    {},
  );

  return {
    author: authorIdToName[data.post.frontmatter.author],
    children: markdown(data.post.internal.content),
    date: data.post.frontmatter.date,
    title: data.post.frontmatter.title,
  };
}

export default mapProps(mapPropsToProps)(PostTemplate);

export const pageQuery = graphql`
  query PostTemplateQuery($id: String!) {
    authors: allTeamJson {
      edges {
        node {
          id
          name
        }
      }
    }
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        date
        title
      }
      internal {
        content
      }
    }
  }
`;
