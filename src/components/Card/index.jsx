import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";

import "./Card.scss";

const Card = ({ cardIndex, columnIndex, children }) =>
  typeof cardIndex !== "undefined" ? (
    <Draggable
      draggableId={`card-${columnIndex}-${cardIndex}`}
      index={cardIndex}
    >
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  ) : (
    <div className="card">{children}</div>
  );

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default Card;
