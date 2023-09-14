'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function  WelcomSlider(){
    const [size, setSize] = useState(0);
    const [isCenterMode, setIsCenterMode] = useState(true);

    useEffect(() => {
        let updateWidth = () => {
        setSize(window.innerWidth);
        };
        let width = addEventListener("resize", updateWidth);
        updateWidth();
        if (size < 768) {
        setIsCenterMode(false);
        } else {
        setIsCenterMode(true);
        }
        return () => removeEventListener("resize", updateWidth);
    }, [size]);

    return (
        <Carousel
        autoPlay
        centerMode={isCenterMode}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        centerSlidePercentage={60}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        infiniteLoop={true}
        >
            <div className="one-slide">
                <Image src="/img/placeholder (2).png" alt="img" width={1170} height={414} />
            </div>
            <div className="one-slide">
                <Image src="/img/placeholder (1).png" alt="img" width={1170} height={414} />
            </div>
            <div className="one-slide">
                <Image src="/img/placeholder (2).png" alt="img" width={1170} height={414} />
            </div>
            <div className="one-slide">
                <Image src="/img/placeholder (1).png" alt="img" width={1170} height={414} />
            </div>

        </Carousel>
        
    )

}