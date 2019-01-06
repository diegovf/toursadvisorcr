import React from "react";

import GridItem from "../../../components/Grid/GridItem";
import Star from "./Star";
import GridContainer from "../../../components/Grid/GridContainer";
import PropTypes from "prop-types";

const Stars = ({ amount = 4, width = "60%" }) => {
  const stars = [];
  for (var i = 0; i < amount; i++) {
    stars.push(
      <GridItem key={i} xs={3} sm={3} md={3}>
        <Star />
      </GridItem>
    );
  }

  return (
    <GridContainer
      justify="center"
      style={{
        width,
        margin: "auto",
        marginBottom: 40
      }}
    >
      {stars.map(s => s)}
    </GridContainer>
  );
};

Stars.propTypes = {
  amount: PropTypes.number,
  width: PropTypes.string
};

export default Stars;
