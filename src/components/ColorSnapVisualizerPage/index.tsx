import type { FC } from 'react';

import { Heading, Layout, Text } from '~/components';

export const ColorSnapVisualizerPage: FC = () => {
  return (
    <Layout title="ColorSnap Visualizer">
      <Heading as="h1" variant="h1">
        <Text as="small" variant="h3">
          Sherwin-Williams
        </Text>
        <br />
        ColorSnap<sup>&reg;</sup> Visualizer
      </Heading>
    </Layout>
  );
};