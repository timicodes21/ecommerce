import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import styled from "styled-components";
import Bus from '../assets/bus.png'
import Hands from '../assets/hands.png'
import Headphone from '../assets/headphone.png'

const Delivery = () => {
    const Text = styled.p`
        font-size: 16px;
        font-weight: 700;
        color: #000000;
        line-height: 21px;
    `;

    const Texttwo = styled.p`
        font-size: 14px;
        font-weight: 400;
        color: #2C3452;
        line-height: 21px;
    `;

  return (
    <Container className="my-5 py-2">
        <Row>
            <div className="col-12 col-md-4">
                <Row>
                    <div className="col-3 d-flex align-items-center">
                        <div className="rounded-circle shadow-sm p-2">
                            <Image src={Bus} fluid />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-column">
                            <Text>Free Delivery</Text>
                            <Texttwo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus veritatis voluptatem dolorem assumenda.</Texttwo>
                        </div>
                    </div>
                </Row>
            </div>
            <div className="col-12 col-md-4">
                <Row className="mt-3 mt-md-1">
                    <div className="col-3 d-flex align-items-center">
                        <div className="rounded-circle shadow-sm p-2">
                            <Image src={Hands} fluid />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-column">
                            <Text>30 Days Return Guarantee</Text>
                            <Texttwo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus veritatis voluptatem dolorem assumenda.</Texttwo>
                        </div>
                    </div>
                </Row>
            </div>
            <div className="col-12 col-md-4">
                <Row className="mt-3 mt-md-1">
                    <div className="col-3 d-flex align-items-center">
                        <div className="rounded-circle shadow-sm p-2">
                            <Image src={Headphone} fluid />
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex flex-column">
                            <Text>24/7 Online Support</Text>
                            <Texttwo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ducimus veritatis voluptatem dolorem assumenda.</Texttwo>
                        </div>
                    </div>
                </Row>
            </div>
        </Row>
    </Container>
  )
}

export default Delivery