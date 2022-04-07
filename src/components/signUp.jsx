import React from 'react'
import { Container, Row, Image, FormControl, Form, InputGroup } from 'react-bootstrap';
import styled from "styled-components";
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'

const SignUp = () => {
    const Heading = styled.p`
        font-size: 24px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 32.02px;
    `;

    const Text = styled.p`
        font-size: 14px;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 18.68px;
    `;

    const TextFollow = styled(Text)`
        line-height: 29px;
    `;

  return (
    <div className='sign-up'>
        <Container className="my-3">
            <Row className="py-5">
                <div className="col-12 col-md-6">
                    <div className='mt-2 mb-3'>
                        <Heading>Sign up for newsletter</Heading>
                    </div>
                    <div className='mb-3'>
                        <Text>and get latest news & update</Text>
                    </div>
                    <div className="mb-3 me-md-5">
                        <Form>
                            <InputGroup className="mb-3 in-group bg-white">
                                <FormControl placeholder="Enter your Email" className="mx-5 footer-input bg-white search-input signup-input p-2" aria-label="Enter your Email" aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text className="input-text d-none d-md-block" id="basic-addon2"><button className="font-18 font-700 text-white bg-orange border-30 py-2 px-5 bor3">Subscribe</button></InputGroup.Text>
                            </InputGroup>
                        </Form>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="p-md-5 d-flex justify-content-end align-items-center">
                        <div className="mt-2">
                            <TextFollow>Follow us</TextFollow>
                        </div>
                        <div className="ms-4 me-2 icon-bg p-2">
                            <Image fluid src={Twitter} />
                        </div>
                        <div className="mx-2 icon-bg p-2">
                            <Image src={Facebook} />
                        </div>
                        <div className="mx-2 icon-bg p-2">
                            <Image src={Instagram} />
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default SignUp