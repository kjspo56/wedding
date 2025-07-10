// WeddingDetails.tsx

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.3rem;
`;

const Info = styled.p`
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const WeddingDetails = () => (
    <Container>
        <Title>결혼식 안내</Title>
        <Info>2025년 10월 25일 (토요일) 오후 1시</Info>
        <Info>서울특별시 강남구 행복웨딩홀 3층</Info>
    </Container>
);

export default WeddingDetails;
