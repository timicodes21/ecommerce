import React from 'react'
import { InputGroup, FormControl, Image, Form, Row, Container } from 'react-bootstrap'
import Searchimage from '../assets/search.png'
import Cart from '../assets/cart.png'

const Search = () => {
  return (
    <Container fluid>
      <Row>
        <div className="col-10">
          <Form>
            <InputGroup className="mb-3 in-group bg-white">
              <InputGroup.Text className="input-text mx-2" id="basic-addon2"><Image src={Searchimage} /></InputGroup.Text>
              <FormControl placeholder="Search anything" className="footer-input bg-white search-input p-2" aria-label="search anything" aria-describedby="basic-addon2"
              />
              <InputGroup.Text className="input-text d-none d-md-block" id="basic-addon2"><button className="font-16 font-500 ibm text-white bg-orange border-30 py-2 px-5 bor3">Search</button></InputGroup.Text>
            </InputGroup>
          </Form>
        </div>
        <div className="col-2 mt-3">
          <Image src={Cart} />
        </div>
      </Row>
    </Container>
  )
}

export default Search