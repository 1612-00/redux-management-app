import React from "react";
import AccordionPanel from "./AccordionPanel";

const Accordion = ({todos}) => {

  console.log(todos)

  return (
    <div>
      <div className="accordion" role="tablist">
        {todos.map((todo) => (
          <AccordionPanel key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
