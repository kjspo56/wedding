import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  background-color: #fffdfb;
`;

const MainMessage = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
  margin: 0;
`;

const InvitationMessage: React.FC = () => {
    return (
        <MessageContainer>
            <MainMessage>
                저희 두 사람이 하나 되는 소중한 날,<br />
                귀한 걸음으로 축복해 주시면<br />
                더없는 기쁨이 되겠습니다.
            </MainMessage>
        </MessageContainer>
    );
};

export default InvitationMessage;
