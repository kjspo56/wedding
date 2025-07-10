import React, { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 1.5rem 1rem;
  background-color: #fffdfb;
  margin-top: 1rem;
  border-radius: 8px;
`;

const Header = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  margin-top: 0.8rem;
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
`;

const Person = styled.div`
  margin-bottom: 0.5rem;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Phone = styled.span`
  margin-left: 0.5rem;
  color: #555;
`;

const AccountNumber = styled.div`
  margin: 0.8rem 0;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: #f8f8f8;
  padding: 0.5rem;
  border-radius: 6px;
  user-select: all;
`;

const CopyButton = styled.button`
  padding: 0.4rem 0.8rem;
  background-color: #0077cc;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 0.8rem;

  &:hover {
    background-color: #005fa3;
  }
`;

const ToggleIcon = styled.span`
  font-size: 1.4rem;
  user-select: none;
`;

const CopyMessage = styled.div`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: green;
`;

const AccountSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);

    const accountNumber = '국민은행 123456-78-901234';

    const handleCopyAccount = () => {
        navigator.clipboard.writeText(accountNumber).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        });
    };

    return (
        <Section>
            <Header onClick={() => setIsOpen(!isOpen)}>
                마음 전하실 곳
                <ToggleIcon>{isOpen ? '▲' : '▼'}</ToggleIcon>
            </Header>
            {isOpen && (
                <Content>
                    <AccountNumber>{accountNumber}</AccountNumber>
                    <CopyButton onClick={handleCopyAccount}>계좌번호 복사</CopyButton>
                    {copySuccess && <CopyMessage>계좌번호가 복사되었습니다!</CopyMessage>}
                </Content>
            )}
        </Section>
    );
};

export default AccountSection;
