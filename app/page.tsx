import Accessories from '@/components/Accessories'
import Clothes from '@/components/Clothes'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import NewProduct from '@/components/NewProduct'
import Shoes from '@/components/Shoes'
import React from 'react'

const page = () => {
  return (
    <div className="bg-black" >
      <Hero />
      <NewProduct /> 
      <Clothes />
      <Accessories />
      <Shoes />
      <Footer />

    </div>
  )
}

export default page