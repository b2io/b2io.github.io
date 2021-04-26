import { FC } from 'react';
import { Layout } from '~/components';

import BuiltForResults from './BuiltForResults';
import DesignedForHumans from './DesignedForHumans';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import FueledByCuriosity from './FueledByCuriosity';
import HomeHero from './HomeHero';

const Home: FC = () => {
  return (
    <Layout>
      <HomeHero />
      <DesignedForHumans />
      <BuiltForResults />
      <FeaturedCaseStudy />
      <FueledByCuriosity />
    </Layout>
  );
};

export default Home;
