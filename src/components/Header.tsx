import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #fef8f3;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #555;
`;

const Header = () => (
    <HeaderContainer>
        <Title>우리 결혼합니다 💍</Title>
        <Subtitle>2025년 10월 26일 토요일 오후 1시</Subtitle>
    </HeaderContainer>
);

export default Header;
