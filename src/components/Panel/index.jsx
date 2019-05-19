import React from "react";
import PropTypes from "prop-types";
import { Card, AddForm } from "components";
import classNames from "classnames";

import "./Panel.scss";

const Panel = ({ title, cards }) => {
  return (
    <div className={classNames("panel", { "panel--empty": !cards })}>
      <div className="panel__inner">
        {title && (
          <div className="panel__title">
            <b>{title}</b>
          </div>
        )}
        {cards && (
          <div className="panel__items">
            {cards.map((card, index) => (
              <Card key={index}>{card}</Card>
            ))}
          </div>
        )}
        <AddForm isEmptyPanel={!cards} />
      </div>
    </div>
  );
};

Panel.propTypes = {
  cards: PropTypes.node,
  title: PropTypes.string
};

export default Panel;
