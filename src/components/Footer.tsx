import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { LogoIcon } from '.';
import { atMinMd, atMinXXL } from '~/breakpoints';

import styled from '@emotion/styled';

const FooterWrapper = styled.div`
  bottom: 0;
  margin: 0 0 0 2rem;
  padding-top: 4rem;

  ${atMinMd} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0;
  }
`;

const FooterLogo = styled(LogoIcon)`
  display: block;
  height: 3.438rem;
  width: auto;

  ${atMinMd} {
    height: 53px;
    margin-top: 0;
    margin-right: 0;
  }

  ${atMinXXL} {
    height: 60px;
  }
`;

const Branding = styled.div`
  ${atMinMd} {
    display: block;
  }
`;

const Slogan = styled.h3`
  color: ${(props) => props.theme.colors.offWhite};
  display: inline-block;
  font-size: 1.875rem;
  font-weight: normal;
  line-height: 1.27;
  letter-spacing: normal;
  margin: 0.625rem 0 0;
  width: 10.438rem;
  word-wrap: auto;

  ${atMinMd} {
    font-size: 30px;
  }

  ${atMinXXL} {
    font-size: 30px;
  }
`;

const Nav = styled.nav`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 1.062rem;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 4rem 0 0 0;
    padding-left: 0;
    text-decoration: underline;

    li {
      flex-basis: 55%;
      margin-bottom: 1.25rem;

      &:nth-child(even) {
        flex-basis: 45%;
      }

      &:last-child {
        margin-bottom: 0;
      }

      ${atMinMd} {
        flex-basis: 70%;
        margin-bottom: 1.25rem;

        /* &:nth-child(even) {
          flex: 1 540%;
        } */
      }
    }

    a {
      color: ${(props) => props.theme.colors.offWhite};
      font-size: 1.062rem;
      line-height: 28px;
      text-decoration: none;

      &:visited {
        color: ${(props) => props.theme.colors.offWhite};
      }

      &:hover {
        color: ${(props) => props.theme.colors.coral};
      }
    }
  }
`;

const ContactBlock = styled.div`
  color: ${(props) => props.theme.colors.offWhite};
  font-size: 1.062rem;
  line-height: 28px;
  letter-spacing: 0;
  margin-top: ${({ theme }) => theme.spacing.xxl};
  padding-bottom: ${({ theme }) => theme.spacing.l};

  ${atMinMd} {
    margin-top: 0;
  }

  a {
    display: block;
    color: ${(props) => props.theme.colors.offWhite};
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  address {
    margin: 2rem 0 2.5rem;
  }

  /* ${atMinMd} {
    grid-column: 3;
  } */
`;

interface FooterItemProps {
  href: string;
}

const FooterItem: FC<FooterItemProps> = ({ href, ...props }) => {
  const { asPath } = useRouter();

  return (
    <li className={asPath == href ? 'active' : ''}>
      <Link href={href}>
        <a {...props} />
      </Link>
    </li>
  );
};

export const Footer: FC = () => {
  return (
    <FooterWrapper>
      <Branding>
        <FooterLogo />
        <Slogan>Where code meets craft.</Slogan>
      </Branding>
      <Nav>
        <ul>
          <FooterItem href="/"> Home</FooterItem>
          <FooterItem href="/careers"> Careers</FooterItem>
          <FooterItem href="/work"> Work</FooterItem>
          <FooterItem href="/blog"> Blog</FooterItem>
          <FooterItem href="/approach"> Approach</FooterItem>
          <FooterItem href="/contact"> Contact</FooterItem>
          <FooterItem href="/culture"> Culture</FooterItem>
        </ul>
      </Nav>
      <ContactBlock>
        <Link href={'mailto:info@base2.io'}>info@base2.io</Link>
        <Link href={'tel:6143981158'}>614.398.1158</Link>
        <address>
          21E 5th Ave. Suite 102 <br /> Columbus OH 43201
        </address>
      </ContactBlock>
    </FooterWrapper>
  );
};
