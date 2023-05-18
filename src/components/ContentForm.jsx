import React from "react";

const ContentForm = ({ count, setCount, handleSubmit }) => {
  return (
    <form className="capitalize leading-7 mt-8 mb-16 flex justify-center text-center" onSubmit={handleSubmit}>
      <label htmlFor="amount">paragraphs:</label>

      <input
        type="number"
        name="amount"
        id="amount"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button className="bg-teal-300 text-teal-700 border border-solid border-teal-300 tracking-widest uppercase py-2 px-3  transition-all duration-300 text-sm cursor-pointer rounded shadow-xl inline-block hover:bg-teal-100 hover:border-teal-700 hover:text-teal-700">
        generate
      </button>
    </form>
  );
};

export default ContentForm;
