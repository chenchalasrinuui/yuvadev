import React from 'react'
import styles from './Carousel.module.css'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
export const CarouselComponent = ({ data }) => {
    return (
        <div>
            <Carousel>
                {
                    data?.map(({ imgPath, heading, subHeading }, index) => {
                        return <>
                            <Carousel.Item>
                                <Image src={imgPath} width="100%" height="100%" alt="" />
                                <Carousel.Caption>
                                    <h3>{heading}</h3>
                                    <p>{subHeading}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </>
                    })
                }

            </Carousel>
        </div>
    )
}

