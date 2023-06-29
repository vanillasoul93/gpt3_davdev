import React from 'react';
import './blog.css';
import { blog01, blog02, blog03, blog04, blog05} from './imports.js';
import { Article } from '../../components';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, we are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 26, 2021"  title="GPT-3 and Open AI is the future. Let us explore it!"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore it!"/>
          <Article imgUrl={blog03} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore it!"/>
          <Article imgUrl={blog04} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore it!"/>
          <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open AI is the future. Let us explore it!"/>
        </div>
      </div>
    </div>
  )
}

export default Blog