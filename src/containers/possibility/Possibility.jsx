import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>A whole new world</h4>
        <h1 className='gradient__text'>Reach beyond the imagination with GPT-3</h1>
        <p>These ideas may seem far-reaching, but technological advancements and ongoing research can push the boundaries of what ChatGPT and similar language models can achieve. The future holds exciting possibilities that can surpass our current imagination.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility