import React from 'react';
import styled from 'styled-components';

const TabBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fef8f3;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid #ddd;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #0077cc;
  }
`;

type TabNavigationProps = {
    onTabClick: (section: 'top' | 'location' | 'contact') => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({ onTabClick }) => {
    return (
        <TabBar>
            <Tab onClick={() => onTabClick('top')}>Ted & Judy</Tab>
            <Tab onClick={() => onTabClick('location')}>오시는길</Tab>
            <Tab onClick={() => onTabClick('contact')}>연락처</Tab>
        </TabBar>
    );
};

export default TabNavigation;
