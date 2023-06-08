import React, { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    const newText = data.slice(0, amount);
    setText(newText);
  };

  return (
    <main className="section-center">
      <h4>Tired of Lorem Ipsum? Try TextGenius!</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          id="amount"
          type="number"
          onChange={handleChange}
          min={1}
          max={8}
          step={1}
          value={count}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => {
          const id = nanoid();
          return <p key={id}>{paragraph}</p>;
        })}
      </article>
    </main>
  );
};
export default App;
