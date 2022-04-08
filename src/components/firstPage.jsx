import React, { useState } from 'react'
import Search from './search'
import { Container, Row } from 'react-bootstrap'
import styled from "styled-components";
import ShopPhones from './shopPhones'
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsLayoutSidebarInset } from 'react-icons/bs';

// First page where the sidebar, search component and shopPhone components are rendered
const FirstPage = () => {

  const [more, setMore] = useState(false);
  const [close, setClose] = useState(false)

  const Text = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #2C3452;
    transition: 0.3s;
    line-height: 21.34px;
    cursor: pointer;
    &:hover {
      color: #EF5E0D;
    }
  `;

  const OrangeText = styled(Text)`
    color: #EF5E0D;
  `;
  return (
    <div>
        <Container className="my-5">
          <Row>
            <div className={close ? 'd-none' : "col-12 col-md-4 mb-3"}>
              <div className="d-flex flex-column shadow-sm border-15 p-3">
                <div className="d-flex justify-content-end">
                  <AiOutlineClose onClick={() => setClose(true)} className="close-icon" />
                </div>
                <div className="border-bottom">
                  <Text>Women's</Text>
                  <Text>Men's</Text>
                  <Text>Kid's</Text>
                  <Text>Accessories</Text>
                  <Text>Clothings</Text>
                  <Text>Shoes</Text>
                  <Text>Watches</Text>
                  <Text>Jewellery</Text>
                  <Text>Health & Beauty</Text>
                  <Text>Sports</Text>
                  {more && <div>
                    <Text>Watches</Text>
                    <Text>Jewellery</Text>
                    <Text>Health & Beauty</Text>
                    <Text>Sports</Text>
                  </div>}
                </div>
                <div onClick={() => setMore(!more)} className="d-flex justify-content-between mt-2">
                  {more ? <OrangeText>See less</OrangeText> : <OrangeText>More Categories</OrangeText>}
                  <div>
                    {more ? <AiOutlineMinus className="plus-icon" /> : <AiOutlinePlus className="plus-icon" />}
                  </div>
                </div>
              </div>
            </div>
            <div className={close ? 'col-12' : 'col-12 col-md-8'}>
              <Search />
              { close ? <BsLayoutSidebarInset onClick={() => setClose(!close)} className="menu-icon my-3" /> : "" }
              <ShopPhones />
            </div>
          </Row>
        </Container>
    </div>
  )
}

export default FirstPage