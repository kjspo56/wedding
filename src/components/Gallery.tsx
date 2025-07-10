import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// src/assets 이미지 import
import test01 from '../assets/test01.jpeg';
import test02 from '../assets/test02.jpeg';
import test03 from '../assets/test03.jpeg';
import test04 from '../assets/test04.jpeg';
import test05 from '../assets/test05.jpeg';

const images = [test01, test02, test03, test04, test05];

const GallerySlider: React.FC = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            style={{ width: '100%', height: '250px' }}
        >
            {images.map((src, idx) => (
                <SwiperSlide key={idx}>
                    <img
                        src={src}
                        alt={`wedding photo ${idx + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px',
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default GallerySlider;
