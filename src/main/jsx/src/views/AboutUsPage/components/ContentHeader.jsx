import React from "react";
import classNames from "classnames";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import { Typography } from "@material-ui/core";

import logo from "old-assets/img/logo155.png";

const ContentHeader = ({ classes }) => {
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={6}>
        <div className={classes.profile}>
          <div>
            <img src={logo} alt="..." className={imageClasses} />
          </div>
          <div className={classes.name}>
            <h2 className={classes.title}>Who We Are</h2>
          </div>
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default ContentHeader;
