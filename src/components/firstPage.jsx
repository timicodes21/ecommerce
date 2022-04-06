import React from 'react'
import Search from './search'
import { Container } from 'react-bootstrap'
import ShopPhones from './shopPhones'

const FirstPage = () => {
  return (
    <div>
        <Container className="my-5">
            <Search />
            <ShopPhones />
        </Container>
    </div>
  )
}

export default FirstPage