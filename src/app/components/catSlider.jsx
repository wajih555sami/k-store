'use client'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function  CatSlider(){

    return (
        <Carousel
        autoPlay
        centerMode={false}
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        infiniteLoop={true}
        >
            <div className="group">
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (2).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (1).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (2).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (1).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
            </div>
            <div className="group">
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (2).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (1).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (2).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
                <Link href="#" className="one-cat">
                    <figure>
                        <Image src="/img/placeholder (1).png" alt="img" width={150} height={150} />
                    </figure>
                    <h3 className="title">Electronics</h3>
                </Link>
            </div>
            

        </Carousel>
        
    )

}