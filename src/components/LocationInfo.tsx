import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
    padding: 1.5rem 1rem;
    background-color: #fffdfb;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
`;

const AddressWrapper = styled.div`
    margin-bottom: 0.8rem;
`;

const Address = styled.p`
    font-size: 1rem;
    color: #444;
    margin-bottom: 0.5rem;
    word-break: keep-all;
`;

const CopyButton = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: #0077cc;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #005fa3;
  }
`;

const InfoText = styled.p`
  font-size: 0.95rem;
  color: #555;
  margin: 0.5rem 0;
  white-space: pre-line; /* 줄바꿈 유지 */
`;

const MapLink = styled.a`
  display: inline-block;
  margin-top: 0.7rem;
  padding: 0.5rem 1.2rem;
  background-color: #0077cc;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: #005fa3;
  }
`;

const CopyMessage = styled.div`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: green;
`;

const LocationInfo: React.FC = () => {
    const address = '서울특별시 강남구 행복웨딩홀 3층';

    const [copySuccess, setCopySuccess] = useState(false);

    const handleCopyAddress = () => {
        navigator.clipboard.writeText(address).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        });
    };

    return (
        <Container>
            <Title>📍 오시는 길</Title>
            <AddressWrapper>
                <Address>{address}</Address>
                <CopyButton onClick={handleCopyAddress}>주소 복사</CopyButton>
                {copySuccess && <CopyMessage>주소가 복사되었습니다!</CopyMessage>}
            </AddressWrapper>

            <MapLink
                href="https://map.naver.com/p/entry/place/your-map-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                네이버 지도에서 보기
            </MapLink>

            <InfoText>
                셔틀버스 안내: 결혼식 당일 오전 11시부터 3시까지 강남역 5번 출구에서 운행됩니다.{'\n'}
                주차 안내: 웨딩홀 지하 주차장 무료 이용 가능합니다.{'\n'}
                대중교통: 지하철 2호선 강남역 하차, 5번 출구에서 도보 5분 거리입니다.
            </InfoText>
        </Container>
    );
};

export default LocationInfo;
