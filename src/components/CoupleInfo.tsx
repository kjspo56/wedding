import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

const Name = styled.p`
  font-size: 1.2rem;
  margin: 0.2rem 0;
`;

const CoupleInfo = () => (
    <Container>
        <Name>신랑: Ted</Name>
        <Name>신부: Judy</Name>
    </Container>
);

export default CoupleInfo;
