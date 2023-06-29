import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className='gpt3__cta'>
      <div className='gpt3__cta-content'>
        <p>Request Early Access</p>
        <h3>Register today & start exploring the endless possibilities.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <a href="https://openai.com/blog/chatgpt" target="_blank" rel="noopener noreferrer">Get Started</a>
      </div>
    </div>
  )
}

export default CTA