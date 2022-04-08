import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import styled from "styled-components";
import Rec from '../assets/rec.png'

// Info Component
const Info = () => {
    const Text = styled.p`
        font-size: 14px;
        font-weight: 400;
        color: #383838;
        line-height: 29px;
    `;

  return (
    <Container className="my-5">
        <Row>
            <div className="col-12 col-md-4">
                <div className="">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus consectetur id facilisi sodales sollicitudin malesuada proin. Suscipit risus ut porttitor cursus consequat iaculis habitant enim.</Text>
                </div>
            </div>
            <div className="col-12 col-md-2">
                <Image src={Rec} />
                <div className="d-flex flex-column">
                    <Text>Why Choose Us</Text>
                    <Text>Our services</Text>
                    <Text>Contact Us</Text>
                    <Text>Terms & conditions</Text>
                </div>
            </div>
            <div className="col-12 col-md-3">
                <Image src={Rec} />
                <div className="d-flex flex-column">
                    <Text>Monday - Friday | 8:00am-10pm</Text>
                    <Text>Saturdays | 9:00am-11pm</Text>
                    <Text>Sundays | 8:00am-9pm</Text>
                </div>
            </div>
            <div className="col-12 col-md-3">
                <Image src={Rec} />
                <div className="d-flex flex-column">
                    <Text>3A Idowu Matins Victoria Island Lagos</Text>
                    <Text>Call Us ~ 081078899008</Text>
                    <Text>E-mail ~ info@keggo.com</Text>
                </div>
            </div>
        </Row>
    </Container>
  )
}

export default Info