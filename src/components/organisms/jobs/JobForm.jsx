import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { em } from 'polished';
import { Button, TextAreaField, TextInputField } from '../../atoms';
import { mediaQuery } from '../../../util/style';

const Wrapper = styled.div`
  margin: 0 auto 5em;
  padding: 0 1em;
  width: 100%;

  ${mediaQuery.small`
    max-width: ${em('700px')};
    padding: 0 0;
  `};

  ${mediaQuery.medium`
    margin: 0;
    max-width: ${em('610px')};
  `};
`;

const SubmitButton = styled(Button)`
  display: block;
  margin: 0 auto;
  width: 100%;

  ${mediaQuery.xsmall`
    padding-left: 0;
    padding-right: 0;
  `};

  ${mediaQuery.small`
    width: auto;
  `};
`;

function JobForm({ isApprenticeship }) {
  return (
    <Wrapper>
      <form action="https://formspree.io/info@base2.io" method="POST">
        <input name="_gotcha" style={{ display: 'none' }} type="text" />
        <input name="_subject" type="hidden" value="Let's work together!" />
        <input name="_next" type="hidden" value="/thanks" />
        <TextInputField label="Name" name="name" required />
        <TextInputField
          label="Email"
          name="email"
          type="email"
          title="your@email.com"
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          required
        />
        <TextInputField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          title="Please include country code (if applicable) and area code. Formatting will be ignored"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
        />
        <TextInputField label="GitHub, CodePen, etc" name="gitHub" />
        <TextInputField label="Website / Portfolio" name="portfolio" />
        {isApprenticeship ? (
          <>
            <TextAreaField
              label="What technologies are you most eager to learn about/work with?"
              name="interestedTechnologies"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What non-technical skills do you hope to learn from us?"
              name="interestedSkills"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What is your ideal learning environment?"
              name="learningEnvironment"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What technologies have you been working with lately?"
              name="recentTechnologies"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What else would you like us to know about you?"
              name="aboutYou"
              multiline
              rows="5"
            />
          </>
        ) : (
          <>
            <TextAreaField
              label="Any project or experience you would like to highlight?"
              name="experienceHighlight"
              multiline
              rows="5"
            />
            <TextInputField label="Please upload your resume" name="website" />
          </>
        )}
        Nearest BaseTwo Location:
        <TextAreaField
          label="Anything else you would like to mention?"
          name="anythingElse"
          multiline
          rows="5"
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </Wrapper>
  );
}

JobForm.propTypes = {
  isApprenticeship: PropTypes.bool.isRequired,
};

export default JobForm;
