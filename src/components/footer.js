import React from 'react';
import { IconGithub, IconLinkedin, IconCodepen, IconInstagram, IconTwitter } from './icons';
import { socialMedia } from '../config';
import styled from 'styled-components';
import { theme, mixins, media } from '../styles';
const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: var(--bg);
  color: ${colors.slate};
  text-align: center;
  height: auto;
`;
const SocialContainer = styled.div`
  color: ${colors.lightSlate};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
  ${media.tablet`display: block;`};
`;
const SocialItemList = styled.ul`
  ${mixins.flexBetween};
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;
const Copy = styled.p`
  margin: 5px 0 3px;
`;
const GithubLink = styled.a`
  color: ${colors.slate};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
`;

const Footer = () => (
  <FooterContainer>
    <SocialContainer>
      <SocialItemList>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}>
                {name === 'Github' ? (
                  <IconGithub />
                ) : name === 'Linkedin' ? (
                  <IconLinkedin />
                ) : name === 'Codepen' ? (
                  <IconCodepen />
                ) : name === 'Instagram' ? (
                  <IconInstagram />
                ) : name === 'Twitter' ? (
                  <IconTwitter />
                ) : (
                  <IconGithub />
                )}
              </SocialLink>
            </li>
          ))}
      </SocialItemList>
    </SocialContainer>
    <Copy>
      <GithubLink
        href="https://brittanychiang.com"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Special thanks to Brittany Chiang.
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
