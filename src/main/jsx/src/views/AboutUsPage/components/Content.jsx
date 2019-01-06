import React from "react";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";

import { Typography } from "@material-ui/core";

import stadium from "assets/img/stadium.jpg";
import classNames from "classnames";
import DashedSeparator from "./DashedSeparator";
import Stars from "./Stars";

const LeftContent = ({ classes }) => {
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );

  return (
    <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
      <GridContainer justify="center">
        {/* description */}
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <Card style={{ backgroundColor: "rgba(0, 144, 173, 1)", margin: 0 }}>
            <CardBody>
              <Typography
                align="center"
                variant="button"
                style={{
                  color: "#FFFFFF",
                  fontSize: 16
                }}
              >
                We are an agency dedicated to meeting the needs of those who
                visit our wonderful country in the field either tourism or just
                business.
              </Typography>
            </CardBody>
          </Card>
        </GridItem>
        {/* image */}
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <div style={{ border: "10px solid rgba(255, 255, 255, 1)" }}>
            <img src={stadium} alt="..." className={imageClasses} />
          </div>
        </GridItem>
        {/* vision */}
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <Card style={{ backgroundColor: "rgba(0, 144, 173, 1)", margin: 0 }}>
            <CardBody>
              <Typography
                align="center"
                paragraph
                variant="title"
                style={{
                  color: "#FFFFFF"
                }}
              >
                Vision
              </Typography>
              <Typography
                align="center"
                paragraph
                style={{
                  color: "#FFFFFF"
                }}
              >
                To be the best consultant travel and tour agency at national and
                international level, providing quality service as already usual,
                and have more branches breaking barriers and making trips to
                destinations not offered by any other agency in addition to
                provide the lowest prices on the market.
              </Typography>
            </CardBody>
          </Card>
        </GridItem>
        {/* mission */}
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <Card style={{ backgroundColor: "rgba(0, 144, 173, 1)", margin: 0 }}>
            <CardBody>
              <Typography
                align="center"
                paragraph
                variant="title"
                style={{
                  color: "#FFFFFF"
                }}
              >
                Mission
              </Typography>
              <Typography
                align="center"
                paragraph
                style={{
                  color: "#FFFFFF"
                }}
              >
                Provide the best service at the lowest price in our packages, in
                order to achieve full customer satisfaction affordable for all
                those who wants the best with the lowest budget, in order to
                enjoy and knowing the most important of each of our
                destinations. In addition to providing the best advice for our
                customers to enjoy their stay in full tranquility.
              </Typography>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </GridItem>
  );
};

const RightContent = ({ classes }) => {
  return (
    <GridItem xs={12} sm={12} md={4} className={classes.navWrapper}>
      <GridContainer justify="center">
        {/* 4 reasons */}
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <Typography
            align="center"
            paragraph
            variant="display1"
            color="textPrimary"
          >
            4 REASONS TO BOOK WITH US
          </Typography>
        </GridItem>
        {/* 4 stars */}
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <Card style={{ backgroundColor: "rgba(0, 144, 173, 1)", margin: 0 }}>
            <CardBody>
              <Stars />
              <Typography
                align="center"
                style={{
                  color: "#FFFFFF"
                }}
                variant="title"
              >
                Expert Travel Knowledge
              </Typography>
              <DashedSeparator />
              <Typography
                align="center"
                style={{
                  color: "#FFFFFF"
                }}
                variant="title"
              >
                Tailor-Made Holidays
              </Typography>
              <DashedSeparator />
              <Typography
                align="center"
                style={{
                  color: "#FFFFFF"
                }}
                variant="title"
              >
                Best Price Guaranteed
              </Typography>
              <DashedSeparator />
              <Typography
                align="center"
                paragraph
                style={{
                  color: "#FFFFFF"
                }}
                variant="title"
              >
                Special Packages And Unique Services
              </Typography>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </GridItem>
  );
};

const Content = ({ classes }) => {
  return (
    <GridContainer justify="center">
      <LeftContent classes={classes} />
      <RightContent classes={classes} />
    </GridContainer>
  );
};

export default Content;
