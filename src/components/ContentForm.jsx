import React from 'react';

const ContentForm = ({ count, setCount, handleSubmit }) => {
  return (
    <form className='lorem-form' onSubmit={handleSubmit}>
      <label htmlFor='amount'>paragraphs:</label>
      <input
        type='number'
        name='amount'
        id='amount'
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button className='btn'>generate</button>
    </form>
  );
};

export default ContentForm;
