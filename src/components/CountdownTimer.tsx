import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  padding: 1rem;
`;

const TimerText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

const CountdownTimer = () => {
    const weddingDate = new Date('2026-10-25T13:00:00'); // 결혼식 날짜

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = +weddingDate - +now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <TimerText>
                결혼식까지 {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초 남았어요 🎉
            </TimerText>
        </Container>
    );
};

export default CountdownTimer;
