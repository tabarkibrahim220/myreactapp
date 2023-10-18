import React from 'react'
import './NewsLetter.css'
 const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive On Email</h1>
        <p>Subcribe To Go To Newslatter</p>
        <div>
            <input type='email' placeholder='your email id' />
            <button>Subscribe</button>
        </div>
    </div>

  )
}

export default NewsLetter