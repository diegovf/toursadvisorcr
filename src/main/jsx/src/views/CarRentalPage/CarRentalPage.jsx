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
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";

const dashboardRoutes = [];

class RentACar extends React.Component {
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
                {/* <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button> */}
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {this.renderPageHeader(classes)}
            {this.renderPageContent(classes)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  renderPageHeader = classes => {
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
              <h2 className={classes.title}>Car Rental</h2>
            </div>
          </div>
          <div className={classes.description}>
            <h3>
              Discover Costa Rica driving comfortably in a vehicle that fulfill
              all your needs.
            </h3>
          </div>
        </GridItem>
      </GridContainer>
    );
  };

  renderPageContent = classes => {
    console.log("classes: ", classes);
    return (
      <GridContainer justify="center">
        {cars.map((car, idx) => (
          <GridItem
            key={"car-" + idx}
            xs={12}
            sm={12}
            md={12}
            className={classes.navWrapper}
          >
            <Car
              // alignCenter
              color="primary"
              horizontal={{
                tabsGrid: { xs: 12, sm: 12, md: 8 },
                contentGrid: { xs: 12, sm: 12, md: 4 }
              }}
              car={car}
            />
          </GridItem>
        ))}
      </GridContainer>
    );
  };
}

export default withStyles({ ...homePageStyle, ...imagesStyles })(RentACar);
