import type { FC } from 'react';

import { Heading, Layout, Text } from '~/components';

export const BatteryXTPage: FC = () => {
  return (
    <Layout title="Battery XT">
      <Heading as="h1" variant="h1">
        <Text as="small" variant="h3">
          DNV•GL
        </Text>
        <br />
        Battery XT
      </Heading>
    </Layout>
  );
};
