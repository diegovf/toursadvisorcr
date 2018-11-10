import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import TouchApp from "@material-ui/icons/TouchApp";
import MoneyOff from "@material-ui/icons/MoneyOff";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/CustomHeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import TourCard from "components/TourCard/TourCard";
import { Typography } from "@material-ui/core";

// utils
import shuffle from "shuffle-array";

// images
import parallaxBackground from "old-assets/img/backgrounds/sunset.jpg";
import logo from "old-assets/img/logo155.png";

// styles
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";

const dashboardRoutes = [];

class HomePage extends React.Component {
  state = {
    lowRatesOffers: [],
    handPickedOffers: []
  };

  componentDidMount() {
    this.fetchLowRates();
    this.fetchHandPicked();
  }

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
              <h2 className={classes.title}>Top Five Best Tours</h2>
            </div>
          </div>
          <Typography align="center" paragraph>
            See how much you can save with these last minute bon voyage rates.
          </Typography>
        </GridItem>
      </GridContainer>
    );
  };

  /**
   * @todo check structure
   */
  renderPageContent = classes => {
    let { lowRatesOffers, handPickedOffers } = this.state;
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    handPickedOffers = shuffle(handPickedOffers);
    lowRatesOffers = shuffle(lowRatesOffers);
    const fixedHalfPicked = Number(handPickedOffers.length / 2).toFixed();
    const fixedHalfRates = Number(lowRatesOffers.length / 2).toFixed();

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <NavPills
            alignCenter
            color="primary"
            tabs={[
              {
                tabButton: "Handpicked Offers",
                tabIcon: TouchApp,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      {handPickedOffers.slice(0, fixedHalfPicked).map(o => (
                        <TourCard
                          key={o.id}
                          className={navImageClasses}
                          history={this.props.history}
                          {...o}
                        />
                      ))}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      {handPickedOffers.slice(fixedHalfPicked).map(o => (
                        <TourCard
                          key={o.id}
                          className={navImageClasses}
                          history={this.props.history}
                          {...o}
                        />
                      ))}
                    </GridItem>
                  </GridContainer>
                )
              },
              {
                tabButton: "Low Rates Offers",
                tabIcon: MoneyOff,
                tabContent: (
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                      {lowRatesOffers.slice(0, fixedHalfRates).map(o => (
                        <TourCard
                          key={o.id}
                          className={navImageClasses}
                          history={this.props.history}
                          {...o}
                        />
                      ))}
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      {lowRatesOffers.slice(fixedHalfRates).map(o => (
                        <TourCard
                          key={o.id}
                          className={navImageClasses}
                          history={this.props.history}
                          {...o}
                        />
                      ))}
                    </GridItem>
                  </GridContainer>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    );
  };

  fetchLowRates = async () => {
    let response = await fetch("/api/tours/search/findTop5ByOrderByPriceAsc");
    let tours = await response.json();
    this.setState({ lowRatesOffers: tours._embedded.tours });
  };

  fetchHandPicked = async () => {
    let response = await fetch(
      "/api/tours/search/findTop5ByPicked?picked=true"
    );
    let tours = await response.json();
    this.setState({ handPickedOffers: tours._embedded.tours });
  };
}

export default withStyles({ ...homePageStyle, ...imagesStyles })(HomePage);
