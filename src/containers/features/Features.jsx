import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: "Increased accuracy and capability",
    text: "As more data is fed into ChatGPT and the underlying models are refined, the accuracy and capability of the system will continue to improve. This could result in more natural and engaging conversations with chatbots, more accurate language translations, and more effective content generation."
  },
  {
    title: "Personalization and customization",
    text: "ChatGPT could be used to develop more personalized and customized experiences for users. By learning from previous interactions and preferences, ChatGPT could tailor its responses and recommendations to each individual user."
  },
  {
    title: "Integration with other technologies",
    text: "ChatGPT could be integrated with other technologies, such as voice assistants, augmented reality, and virtual reality, to create more immersive and interactive experiences. This could open up new possibilities for applications in fields such as education, healthcare, and entertainment."
  },
  {
    title: "Ethical considerations",
    text: "As ChatGPT becomes more advanced and capable, there will be increasing concerns around its ethical implications, such as data privacy, bias, and misuse. It will be important to address these concerns and ensure that the technology is developed and used in a responsible and ethical manner."
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The future of ChatGPT is promising, as the field of natural language processing and understanding continues to evolve and grow. Here are a few potential developments that could shape the future of ChatGPT</h1>
        <a href='https://openai.com/blog/chatgpt'>Request Early Access to  Get Started</a>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>

        ))}

      </div>
    </div>
  )
}

export default Features