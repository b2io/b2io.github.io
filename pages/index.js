import React from 'react';
import styled from 'styled-components';
import {
  B2Logo,
  EdgeShape,
  FullScreenSection,
  HighlightText,
  TextBox,
  Title,
} from '../components';
import { Clients, Technologies } from '../modules';
import { color, gradient } from '../helpers/colors';
import { fullWidth, home } from '../helpers/templates';
import { polygon } from '../helpers/shapes';

const Index = styled.div`
  ${fullWidth};
  ${home};
`;

export default () =>
  (<Index>
    <FullScreenSection color={color.black}>
      <B2Logo />
    </FullScreenSection>

    <FullScreenSection
      gradient={gradient.dusk}
      height="100"
      image="/static/fullscreen/brick-wall.jpg"
    >
      <EdgeShape color={color.black} shape={polygon.shape1} side="top" />
      <TextBox color={color.black}>
        <Title small>Web. Design. Mobile.</Title>
        This box is great for text. Anywhere is great for emojis. :sunglasses:
      </TextBox>
      <HighlightText color={color.black}>
        <Title>We turn ideas into beautiful software.</Title>
      </HighlightText>
      <EdgeShape color={color.blue} shape={polygon.shape2} side="bottom" />
    </FullScreenSection>

    <FullScreenSection color={color.blue}>
      <Clients />
    </FullScreenSection>

    <FullScreenSection
      height="160"
      image="/static/fullscreen/screen-side-brick-wall.jpg"
    >
      <EdgeShape color={color.blue} shape={polygon.shape3} side="top" />
      <EdgeShape color={color.purple} shape={polygon.shape4} side="bottom" />
    </FullScreenSection>

    <FullScreenSection color={color.purple}>
      <Technologies />
    </FullScreenSection>

    <FullScreenSection
      height="180"
      image="/static/fullscreen/hands-working-at-desk.jpg"
    >
      <EdgeShape color={color.purple} shape={polygon.shape5} side="top" />
      <EdgeShape color={color.red} shape={polygon.shape6} side="bottom" />
    </FullScreenSection>

    <FullScreenSection color={color.red} height="50" />

    <FullScreenSection
      height="160"
      image="/static/fullscreen/dual-screen-brick-wall.jpg"
    >
      <EdgeShape color={color.red} shape={polygon.shape7} side="top" />
      <EdgeShape color={color.yellow} shape={polygon.shape8} side="bottom" />
    </FullScreenSection>

    <FullScreenSection color={color.yellow} height="50" />

    <FullScreenSection
      gradient={gradient.dusk}
      height="120"
      image="/static/fullscreen/strategy-meeting.jpg"
    >
      <EdgeShape color={color.yellow} shape={polygon.shape9} side="top" />
      <EdgeShape color={color.black} shape={polygon.shape10} side="bottom" />
    </FullScreenSection>

    <FullScreenSection color={color.black} />
  </Index>);
