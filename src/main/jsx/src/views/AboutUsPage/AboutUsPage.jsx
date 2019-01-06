import withStyles from "@material-ui/core/styles/withStyles";
import { cars } from "old-assets/db/carRental";

import classNames from "classnames";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/CustomHeaderLinks";
import React from "react";
import Car from "views/CarRentalPage/Car.jsx";

// images
import parallaxBackground from "old-assets/img/backgrounds/car.jpg";
import logo from "old-assets/img/logo155.png";

// styles
import aboutUsStyle from "assets/jss/material-kit-react/views/aboutUsPage";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
import { Typography } from "@material-ui/core";
import ContentHeader from "./components/ContentHeader";
import Content from "./components/Content";

const dashboardRoutes = [];

class AboutUsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="ToursAdvisorCR"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={parallaxBackground}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.slogan}>
                  Helping you enjoy more for less money.
                </h1>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ContentHeader classes={classes} />
            <Content classes={classes} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles({ ...aboutUsStyle, ...imagesStyles })(AboutUsPage);
