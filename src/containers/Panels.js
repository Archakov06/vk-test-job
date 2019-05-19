import React, { Fragment } from "react";
import { Panel } from "components";
import { connect } from "react-redux";

const Panels = ({ items }) => (
  <Fragment>
    {items.map((item, index) => (
      <Panel key={index} {...item} />
    ))}
    <Panel />
  </Fragment>
);

export default connect(({ panels }) => ({ items: panels }))(Panels);
