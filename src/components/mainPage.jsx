import React from 'react'
import BestSeller from './bestSeller'
import Ezone from './ezone'
import FirstPage from './firstPage'
import PopularCategories from './popularCategories'
import SignUp from './signUp'
import Info from './info'
import Delivery from './delivery'
import Footer from './footer'

const MainPage = () => {
  return (
    <div>
      <FirstPage />
      <PopularCategories />
      <BestSeller header="Best Seller" />
      <Ezone />
      <BestSeller header="Deal of the Day" />
      <SignUp />
      <Info />
      <Delivery />
      <Footer />
    </div>
  )
}

export default MainPage