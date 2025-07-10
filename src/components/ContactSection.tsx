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

const ToggleIcon = styled.span`
  font-size: 1.4rem;
  user-select: none;
`;

const ContactSection: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const contacts = [
        { role: '신랑', name: 'Ted', phone: '010-1234-5678' },
        { role: '신부', name: 'Judy', phone: '010-9876-5432' },
        { role: '신랑 부모님', name: 'Mr. & Mrs. Ted', phone: '02-111-2222' },
        { role: '신부 부모님', name: 'Mr. & Mrs. Judy', phone: '02-333-4444' },
    ];

    return (
        <Section>
            <Header onClick={() => setIsOpen(!isOpen)}>
                연락처
                <ToggleIcon>{isOpen ? '▲' : '▼'}</ToggleIcon>
            </Header>
            {isOpen && (
                <Content>
                    {contacts.map(({ role, name, phone }) => (
                        <Person key={phone}>
                            <Name>{role}:</Name>
                            <Phone>{name} / {phone}</Phone>
                        </Person>
                    ))}
                </Content>
            )}
        </Section>
    );
};

export default ContactSection;
