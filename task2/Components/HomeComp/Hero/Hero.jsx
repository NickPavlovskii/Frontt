import React from 'react'
import id from './Hero.module.css'

export const Hero = () => {
  return (
   <section id={id.hero}>
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all pruducts</h1>
    <p>Save more with coupons AND up to 70% off! </p>
    <button>Shop now</button>

</section>
  )
}

export default Hero;