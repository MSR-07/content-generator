import React from 'react';

const LoremText = ({ text }) => {
  return (
    <article className='mx-5 text-justify'>
      {text.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </article>
  );
};

export default LoremText;
