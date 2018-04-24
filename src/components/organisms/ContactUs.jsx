import React from 'react';
import styled from 'styled-components';
import { ContactForm, ContactHeader, ContactInformation } from '../organisms';
import { Section } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const Wrapper = styled(Section)`
  background: url(img/backgrounds/moon.jpg) center bottom / contain no-repeat;
  display: block;
  padding-bottom: 45vw;
  position: relative;
  overflow-x: hidden;

  ${mediaQuery.large`
    padding-bottom: 28em;
  `};
`;

const ContactContent = styled.div`
  padding-top: ${themed('navHeight.value')};
  position: relative;

  ${mediaQuery.medium`
    align-items: center;
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
  `};
`;

function ContactUs() {
  return (
    <Wrapper>
      <ContactHeader />
      <ContactContent id="contact-us">
        <ContactForm />
        <ContactInformation />
      </ContactContent>
    </Wrapper>
  );
}

ContactUs.defaultProps = {};

ContactUs.propTypes = {};

export default ContactUs;
