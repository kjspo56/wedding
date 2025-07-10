import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CoupleInfo from '../components/CoupleInfo';
import WeddingDetails from '../components/WeddingDetails';
import CountdownTimer from '../components/CountdownTimer';          //카운트 타이머
import LocationInfo from '../components/LocationInfo';              //오시는길
import Gallery from '../components/Gallery';
import TabNavigation from '../components/TabNavigation';
import InvitationMessage from '../components/InvitationMessage';    //초대 문구
import WeddingCalendar from '../components/WeddingCalendar';        //달력
import ContactSection from '../components/ContactSection';          //연락처
import AccountSection from '../components/AccountSection';          //계좌번호

const InvitationPage = () => {
    // 각 섹션에 ref 달기
    const topRef = useRef<HTMLDivElement>(null);
    const locationRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleTabClick = (section: 'top' | 'location' | 'contact') => {
        let target : HTMLDivElement | null = null;
        if (section === 'top') target = topRef.current;
        else if (section === 'location') target = locationRef.current;
        else if (section === 'contact') target = contactRef.current;

        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <TabNavigation onTabClick={handleTabClick} />

            <div ref={topRef}>
                <Header />
                <CoupleInfo />
                <WeddingDetails />
                <CountdownTimer />
                <InvitationMessage />
                <WeddingCalendar />
                <Gallery />
                <AccountSection />
            </div>

            <div ref={locationRef}>
                <LocationInfo />
            </div>

            <div ref={contactRef}>
                <ContactSection />
            </div>

            <Footer />
        </>
    );
};

export default InvitationPage;
