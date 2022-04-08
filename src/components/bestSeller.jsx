import React from 'react'
import styled from "styled-components";
import { Container, Row, Image } from 'react-bootstrap';
import Iphone from '../assets/iphone.png'
import Fridge from '../assets/fridge.png'
import Fullstar from '../assets/fullstar.png'
import Halfstar from '../assets/halfstar.png'

// Best Seller Component but also used it for deal of the day passing props
const BestSeller = ({ header }) => {
    const Heading = styled.p`
        font-size: 28px;
        font-weight: 600;
        color: #2C3452;
        line-height: 37.35px;
    `;

    const Text = styled.p`
        font-size: 16px;
        font-weight: 600;
        color: #2C3452;
        line-height: 21.34px;
    `;

    const PriceText = styled(Text)`
        font-weight: 700;
        color: #000000;
    `;

    const CancelledText = styled.p`
        font-size: 10px;
        text-decoration: line-through;
        font-weight: 400;
        color: #C5C5C5;
        line-height: 13.34px;
    `;

    const DiscountText = styled(CancelledText)`
        color: #45B75E;
    `;

    const items = [
        {id: 1, name: 'IPhone 11', price: '$ 300', formerPrice: '$ 300', discount: '-30%', img: Iphone},
        {id: 2, name: 'Refrigirator', price: '$ 300', formerPrice: '$ 300', discount: '-30%', img: Fridge},
        {id: 3, name: 'IPhone 11', price: '$ 300', formerPrice: '$ 300', discount: '-30%', img: Iphone},
        {id: 4, name: 'Refrigirator', price: '$ 300', formerPrice: '$ 300', discount: '-30%', img: Fridge}
    ]

  return (
    <Container className="my-2">
        <div className="mb-5">
            <Heading>{header}</Heading>
        </div>
        <Row>
            {
                items.map(item => (
                    <div key={item.id} className="col-6 col-md-3">
                        <div className="border-15 best-seller-items p-2 mt-2 shadow-sm">
                            <div className={item.name === 'IPhone 11' ? '' : 'text-center'}>
                                <Image src={item.img} fluid />
                            </div>
                            <div className='mt-4'>
                                <Text>{item.name}</Text>
                            </div>
                            <div className='mt-2 d-flex align-items-center'>
                                <PriceText>{item.price}</PriceText>
                                <div className="mx-2">
                                    <CancelledText>{item.formerPrice}</CancelledText>
                                </div>
                                <DiscountText>{item.discount}</DiscountText>
                            </div>
                            <div className="my-3 d-flex">
                                <Image src={Fullstar} /><Image src={Fullstar} /><Image src={Fullstar} /><Image src={Fullstar} /><Image src={Halfstar} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </Row>
    </Container>
  )
}

export default BestSeller