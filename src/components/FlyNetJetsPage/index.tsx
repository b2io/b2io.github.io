import type { FC } from 'react';

import { Heading, Layout, Text } from '~/components';

export const FlyNetJetsPage: FC = () => {
  return (
    <Layout title="Fly NetJets">
      <Heading as="h1" variant="h1">
        <Text as="small" variant="h3">
          NetJets
        </Text>
        <br />
        Fly NetJets
      </Heading>
    </Layout>
  );
};
