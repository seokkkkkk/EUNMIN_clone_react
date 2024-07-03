import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/swiper.css";
import WorkDataImage from "./WorkDataImage";
import { WorkDataList } from "../../interfaces/WorkData";

const WorkList = ({ workDatas }: WorkDataList) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(
        null
    );

    useEffect(() => {
        const handleResize = () => {
            if (swiperInstance) {
                swiperInstance.update();
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [swiperInstance]);

    return (
        <Swiper
            onSwiper={setSwiperInstance}
            modules={[Navigation, Autoplay]}
            navigation={{}}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            loop={true}
        >
            {workDatas.map((workData, index) => (
                <SwiperSlide key={index}>
                    <WorkDataImage
                        title={workData.title}
                        img={workData.img}
                        description={workData.description}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default WorkList;
