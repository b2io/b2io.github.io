import { css } from '@emotion/react';
import { FC } from 'react';

import { Heading, IconCard, Link } from '~/components';
import { atMinDesktop, atMinTablet, atMinXL, cssClamp, spacing } from '~/theme';
import { IconCardGrid } from '../IconCard';

const imageDimensionsCalc = cssClamp([25.625, 'mobile'], [69.5, 'tablet']);

const GradientCircleImage: FC = () => {
  return (
    <div
      css={css`
        height: ${imageDimensionsCalc};
        position: absolute;
        right: calc(77% - ${imageDimensionsCalc});
        top: 0;
        width: ${imageDimensionsCalc};
        z-index: 0;

        ${atMinDesktop} {
          right: calc(57% - ${imageDimensionsCalc});
        }
      `}
    >
      <img
        css={css`
          width: 100%;
        `}
        alt="large abstract gradient circle"
        src="/home/large-gradient-circle.png"
      />
    </div>
  );
};

export const HowWeBuild: FC = (props) => {
  return (
    <section
      css={css`
        ${atMinXL} {
          margin-left: 7.6125rem;
          margin-right: 7.6125rem;
        }
      `}
      {...props}
    >
      <div
        css={css`
          position: relative;
        `}
      >
        <picture>
          <source
            media="(min-width: 1200px)"
            srcSet="/approach/howwebuild-large.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/approach/howwebuild-medium.jpg"
          />
          <img
            css={css`
              margin-bottom: 3.813rem;
              margin-left: calc(50% - 50vw);
              margin-top: ${cssClamp([5.125, 'mobile'], [17.313, 'tablet'])};
              position: relative;
              width: ${cssClamp(
                [16.688, 'mobile'],
                [38.063, 'tablet'],
                [64.5, 'desktop'],
              )};
              z-index: 1;

              ${atMinXL} {
                margin-left: -14rem;
              }
            `}
            src="/approach/howwebuild-small.jpg"
            alt="man standing behind chair in a meeting with other people"
          />
        </picture>
        <GradientCircleImage />
      </div>
      <Heading
        as="h2"
        variant="h2"
        css={css`
          margin-bottom: ${spacing.xs};
          position: relative;
          z-index: 1;
        `}
      >
        How we build.
      </Heading>
      <Heading
        as="h3"
        variant="h3"
        css={css`
          margin-bottom: ${spacing.xxl};
          max-width: 51.938rem;
          position: relative;
          z-index: 1;

          ${atMinTablet} {
            margin-bottom: ${spacing.xxl1};
          }
        `}
      >
        Let&apos;s face it&mdash;things pop up along the way. Our development
        process is intentionally flexible to allow us to accommodate the
        unexpected. While we work with everyone uniquely, a few steps are
        central to our approach.
      </Heading>
      <IconCardGrid
        css={css`
          margin-bottom: 5rem;
        `}
      >
        <IconCard icon="discovery" heading="Discovery">
          Your idea forms the basis of our process. We work with you to fully
          understand the story you want communicated or the problem you want
          solved—and how it fits into your entire ecosystem.
        </IconCard>
        <IconCard icon="execution" heading="Execution">
          We follow a software development methodology called agile, involving
          two-week development sprints, daily standups, demos of completed
          tasks, and retrospectives for feedback and course correction.
        </IconCard>
        <IconCard icon="delivery" heading="Delivery">
          At the end of each sprint, we release software and gather user
          feedback to better shape it moving forward. We also debut completed
          software outside of the production environment, take it fully live,
          and share it with the world.
        </IconCard>
        <IconCard icon="support" heading="Support">
          Support completes the loop, but not our relationship. During this
          phase, a concentrated team of developers will be available to fix bugs
          and make any necessary adjustments to the structure, flow and
          documentation.
        </IconCard>
      </IconCardGrid>
      <Link href="/contact" variant="CTA">
        Let&apos;s make a plan together
      </Link>
    </section>
  );
};
