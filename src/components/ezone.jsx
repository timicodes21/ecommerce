import React from 'react'
import { Container, Row, Image } from 'react-bootstrap';
import styled from "styled-components";
import Person from '../assets/person.png'

const Ezone = () => {
    const Heading = styled.p`
        font-size: 48px;
        font-weight: 700;
        color: #FFFFFF;
        line-height: 85px;
    `;

    const HeadingMobile = styled.p`
        font-size: 32px;
        font-weight: 700;
        color: #FFFFFF;
        line-height: 50px;
    `;

    const Text = styled.p`
        font-size: 18px;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 29px;
    `;

  return (
    <div>
        <Container className="my-5">
            <Row className="linear-gradient">
                <div className="col-12 col-md-6 p-2 p-md-5">
                    <div className="mx-2 d-none d-md-block">
                        <Heading>Ezone Ecommerce</Heading>
                    </div>
                    <div className="mx-2 d-md-none">
                        <HeadingMobile>Ezone Ecommerce</HeadingMobile>
                    </div>
                    <div className="mx-2">
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div>
                        <Image fluid src={Person} />
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Ezone