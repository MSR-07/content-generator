import React from 'react';
import { Headings } from './theme/typography';

const LoremText = ({ text }) => {
  return (
    <article className='mx-5 text-justify'>
      {text.map((item, index) => {
        return <Headings lg key={index}>{item}</Headings>
      })}
    </article>
  );
};

export default LoremText;
