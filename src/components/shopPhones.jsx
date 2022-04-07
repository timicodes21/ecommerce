import React from 'react'
import { Carousel, Row, Image } from 'react-bootstrap'
import styled from "styled-components";
import Phones from '../assets/phones.png'

const ShopPhones = () => {
    const Title = styled.p`
        font-size: 58px;
        font-weight: 500;
        color: #412C4E;
        font-family: 'Montserrat', sans-serif;
        line-height: 80px;
    `;
    const TitleMobile = styled.p`
        font-size: 42px;
        font-weight: 500;
        color: #412C4E;
        font-family: 'Montserrat', sans-serif;
        line-height: 50px;
    `;
  return (
    <div>
        <Carousel className="bg-lilac border-20">
            <Carousel.Item className="bg-lilac p-5 border-20">
                <Row>
                    <div className="col-12 col-md-7">
                        <div className="d-md-none">
                            <TitleMobile>Shop the Latest Iphones</TitleMobile>
                        </div>
                        <div className="d-none d-md-block">
                            <Title>Shop the Latest Iphones</Title>
                        </div>
                        <div className='mt-5'>
                            <button className="font-16 font-500 ibm text-white bg-orange border-30 py-2 px-5 bor3">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 mt-5 mt-md-1">
                        <Image src={Phones} fluid />
                    </div>
                </Row>        
            </Carousel.Item>
            <Carousel.Item className="bg-lilac p-5 border-20">
                <Row>
                    <div className="col-12 col-md-7">
                        <div className="d-md-none">
                            <TitleMobile>Shop the Latest Iphones</TitleMobile>
                        </div>
                        <div className="d-none d-md-block">
                            <Title>Shop the Latest Iphones</Title>
                        </div>
                        <div className='mt-5'>
                            <button className="font-16 font-500 ibm text-white bg-orange border-30 py-2 px-5 bor3">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 mt-5 mt-md-1">
                        <Image src={Phones} fluid />
                    </div>
                </Row>        
            </Carousel.Item>
            <Carousel.Item className="bg-lilac p-5 border-20">
                <Row>
                    <div className="col-12 col-md-7">
                        <div className="d-md-none">
                            <TitleMobile>Shop the Latest Iphones</TitleMobile>
                        </div>
                        <div className="d-none d-md-block">
                            <Title>Shop the Latest Iphones</Title>
                        </div>
                        <div className='mt-5'>
                            <button className="font-16 font-500 ibm text-white bg-orange border-30 py-2 px-5 bor3">Shop Now</button>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 mt-5 mt-md-1">
                        <Image src={Phones} fluid />
                    </div>
                </Row>        
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default ShopPhones