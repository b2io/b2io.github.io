import type { FC } from 'react';

import { Heading, Layout, Text } from '~/components';

export const ScopeBuilderPage: FC = () => {
  return (
    <Layout title="ScopeBuilder">
      <Heading as="h1" variant="h1">
        <Text as="small" variant="h3">
          AEP
        </Text>
        <br />
        ScopeBuilder
      </Heading>
    </Layout>
  );
};
