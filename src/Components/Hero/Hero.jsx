import React from 'react'
import './Hero.css' 
import arrow_icon from '../Assetes/arrow.png'
import hero_image from '../Assetes/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
<div className="hero-left">
<h2>New Arrivals</h2>
<div>
    <div className="hero-hand-icon">
        <p>New</p>
        <img  alt='' />

    </div>
    <p> Collection </p>
    <p>For Everyone</p>
</div>
<div className="hero-latest-btn">
    <div>Latest Collection </div>
    <img  src={arrow_icon} alt="" />
</div>
</div>
<div className="hero-right">
<img  src={hero_image}  alt="" />
</div>
        </div>
    )
}
  
export default Hero