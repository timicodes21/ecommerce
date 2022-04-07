import React from 'react'
import { Container } from 'react-bootstrap';
import styled from "styled-components";

const Footer = () => {
    const Text = styled.p`
        font-size: 12px;
        font-weight: 400;
        color: #3C3C3C;
        line-height: 29pxpx;
    `;

  return (
    <div className="border-top">
        <Container className="mt-3 mb-4"> 
            <div className="text-center">
                <Text>Copyrights © 2020 Ezone. All rights reserved.</Text>
            </div>
        </Container>
    </div>
  )
}

export default Footer