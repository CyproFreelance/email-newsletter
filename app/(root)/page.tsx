import Hero from '@/components/Pages/Hero'
import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <>
      <div className=''>
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}

export default page