import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3 is based on a deep neural network architecture known as a transformer. It has been trained on a massive corpus of text data, using a technique called unsupervised learning, which means it was not specifically trained on any task but learned from the patterns in the input data."/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <a href="#blog">Explore The Library</a>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="ChatGPT can be used to build conversational chatbots that can interact with users in natural language. These chatbots can be designed to provide customer support, answer questions, provide recommendations, or perform other tasks."/>
        <Feature title="Content generation" text="ChatGPT can be used to generate content automatically. For example, it can be used to create blog posts, social media posts, or product descriptions based on a given topic or keyword."/>
        <Feature title="Personal assistants" text=" ChatGPT can be used to build personal assistants that can help users with tasks such as scheduling appointments, making reservations, or finding information."/>
      </div>
    </div>
  )
}

export default WhatGPT3