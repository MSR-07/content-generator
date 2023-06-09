import React, { useState } from 'react';
import './App.css';
import data from './data/content';
import ContentForm from './components/ContentForm';
import LoremText from './components/LoremText';
import { Headings } from './components/theme/typography';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='max-w-2xl mt-20 text-center mx-auto w-full'>
    <Headings main_Heading>tired of boring lorem ipsum?</Headings>
      <ContentForm count={count} setCount={setCount} handleSubmit={handleSubmit} />
      <LoremText text={text} />
    </section>
  );
}

export default App;
