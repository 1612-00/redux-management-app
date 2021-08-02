import React from "react";
import Accordion from './Accordion';

const TodoForm = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button type="submit">Add</button>
      </form>
      <div className="accordion">
        <Accordion />
      </div>
    </div>
  );
};

export default TodoForm;
