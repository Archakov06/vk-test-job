import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired
};

export default Button;
