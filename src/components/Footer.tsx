import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #fafafa;
  font-size: 0.9rem;
  color: #888;
`;

const Footer = () => (
    <FooterContainer>
        진심으로 축하해 주셔서 감사합니다 💕<br />
        <small>&copy; 2025 Ted & Judy</small>
    </FooterContainer>
);

export default Footer;
