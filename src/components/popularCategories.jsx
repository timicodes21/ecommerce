import React from 'react'
import styled from "styled-components";
import { Container, Row, Image } from 'react-bootstrap';
import Electronics from '../assets/electronics.png'
import Health from '../assets/healthAnd.png'
import Phones from '../assets/phoness.png'
import Fashion from '../assets/fashion.png'

// Popular Categories component
const PopularCategories = () => {
    const Heading = styled.p`
        font-size: 28px;
        font-weight: 600;
        color: #2C3452;
        line-height: 37.35px;
    `;

    const Text = styled.p`
        font-size: 16px;
        font-weight: 400;
        color: #2C3452;
        line-height: 21.34px;
    `;

    const items = [
        {id: 1, name: 'Phones & Accessories', img: Phones},
        {id: 2, name: 'Phones & Accessories', img: Phones},
        {id: 3, name: 'Health and Beauty', img: Health},
        {id: 4, name: 'Fashion', img: Fashion},
        {id: 5, name: 'Electronics', img: Electronics},
        {id: 6, name: 'Health and Beauty', img: Health}
    ]

  return (
    <Container className="my-2">
        <div>
            <Heading>Popular Categories</Heading>
        </div>
        <Row>
            {
                items.map(item => (
                    <div key={item.id} className="col-6 col-md-2 text-center">
                        <div className="best-seller-items">
                            <div>
                                <Image src={item.img} fluid />
                            </div>
                            <div className='mt-2'>
                                <Text>{item.name}</Text>
                            </div>
                        </div>
                    </div>
                ))
            }
        </Row>
    </Container>
  )
}

export default PopularCategories