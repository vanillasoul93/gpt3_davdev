import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>ChatGPT can be used to build a wide range of applications that involve natural language processing and understanding. Its ability to understand context and generate human-like responses makes it a powerful tool for building conversational interfaces and automating language-based tasks.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='your email address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p> 1,600 people requested access in the last 24 hours.</p>
        </div>
        
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai'/>
      </div>
    </div>
  )
}

export default Header