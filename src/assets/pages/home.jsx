import React from 'react'
import { Header } from '../components/header'

export const Home = () => {
  return (
    <>
      <div className="col-lg-12 d-flex">
        <div className="col-lg-2">
          <Header />
        </div>
        <div className="col-lg-10">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quia vitae velit itaque, voluptate consequuntur rerum quis eum illo porro!</p>
        </div>
      </div>
    </>
  )
}
