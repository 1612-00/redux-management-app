import React, { useState } from "react";

const AccordionPanel = ({ todo }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="panel" role="tabpanel">
      <button
        className="panel__label"
        role="tab"
        onClick={() => setIsActive(!isActive)}
      >
        {todo.title}
      </button>
      {isActive && (
        <div className="panel__inner">
          <p className="panel__content">{todo.content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionPanel;
