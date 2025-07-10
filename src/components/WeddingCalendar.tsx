import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fffdfb;
  border-radius: 8px;
  text-align: center;
`;

const MonthYear = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 0.3rem;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 6px;
`;

const Day = styled.div<{ isWeddingDay?: boolean }>`
  padding: 0.5rem 0;
  border-radius: 4px;
  background-color: ${({ isWeddingDay }) => (isWeddingDay ? '#f8c0c8' : 'transparent')};
  color: ${({ isWeddingDay }) => (isWeddingDay ? '#b00020' : '#444')};
  font-weight: ${({ isWeddingDay }) => (isWeddingDay ? 'bold' : 'normal')};
`;

const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

const WeddingCalendar: React.FC = () => {
    // 결혼식 날짜
    const weddingDate = new Date('2026-10-25T13:00:00');

    // 달력 표시할 년도, 월 (0부터 시작)
    const year = weddingDate.getFullYear();
    const month = weddingDate.getMonth();

    // 그 달 1일의 요일 (0:일요일 ~ 6:토요일)
    const firstDay = new Date(year, month, 1).getDay();

    // 그 달 마지막 날짜
    const lastDate = new Date(year, month + 1, 0).getDate();

    // 달력에 들어갈 일 수 배열 (빈칸 포함)
    const daysArray = [];

    // 빈칸 추가
    for (let i = 0; i < firstDay; i++) {
        daysArray.push(null);
    }

    // 날짜 추가
    for (let d = 1; d <= lastDate; d++) {
        daysArray.push(d);
    }

    return (
        <CalendarContainer>
            <MonthYear>{year}년 {month + 1}월</MonthYear>
            <Weekdays>
                {weekdays.map((wd) => (
                    <div key={wd}>{wd}</div>
                ))}
            </Weekdays>
            <DaysGrid>
                {daysArray.map((day, idx) => (
                    <Day
                        key={idx}
                        isWeddingDay={day === weddingDate.getDate()}
                    >
                        {day || ''}
                    </Day>
                ))}
            </DaysGrid>
            <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#b00020', fontWeight: 'bold' }}>
                결혼식 시간: 오후 1시
            </p>
        </CalendarContainer>
    );
};

export default WeddingCalendar;
