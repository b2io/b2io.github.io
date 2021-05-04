import { NextPage } from 'next';
import { Layout } from '~/components';
import { PageHero } from '~/components/shared';

const heroImageSource = {
  largeDesktop: '/shared/approach-hero-xlarge.jpg',
  tablet: '/shared/approach-hero-medium.jpg',
  xl: '/shared/approach-hero-large.jpg',
  xs: '/shared/approach-hero-small.jpg',
};

const ApproachIndexPage: NextPage = () => {
  return (
    <Layout>
      <PageHero
        alt="person staring at a computer"
        imgSource={heroImageSource}
        text="People motivate what we do and how we do it"
      />
    </Layout>
  );
};

export default ApproachIndexPage;
