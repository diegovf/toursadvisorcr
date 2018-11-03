import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

// import destinations from "old-assets/db/destinations";
import parallaxBackground from "old-assets/img/backgrounds/destination.jpg";
import logo from "old-assets/img/logo155.png";

import classNames from "classnames";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomCardMedia from "myComponents/CustomCardMedia/CustomCardMedia";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/CustomHeaderLinks.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";

// styles
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
import { Typography } from "@material-ui/core";

const dashboardRoutes = [];

class DestinationPage extends React.Component {
  state = {
    isLoading: false,
    destination: {
      name: "",
      code: 0,
      description: "",
      tours: []
    }
  };

  componentDidMount() {
    const { match } = this.props;
    this.fetchDestination(match.params.destination);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.match.params.destination !== this.props.match.params.destination
    ) {
      this.fetchDestination(nextProps.match.params.destination);
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const { destination, isLoading } = this.state;

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
            {this.renderPageHeader(destination, classes)}
            {!isLoading &&
              destination.tours.length > 0 &&
              this.renderPageContent(destination, classes)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  renderPageHeader = (destination, classes) => {
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const { isLoading } = this.state;

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <div className={classes.profile}>
            <div>
              <img src={logo} alt="..." className={imageClasses} />
            </div>
            {isLoading ? (
              <CircularProgress size={68} style={{ marginBottom: 70 }} />
            ) : (
              <div className={classes.name}>
                <h2 className={classes.title}>{destination.name}</h2>
              </div>
            )}
          </div>
          {!isLoading && (
            <Typography align="center" paragraph>
              {destination.description}
            </Typography>
          )}
        </GridItem>
      </GridContainer>
    );
  };

  /**
   * @todo check structure
   */
  renderPageContent = (destination, classes) => {
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    const fixedHalf = Number(destination.tours.length / 2).toFixed();

    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              {destination.tours.slice(0, fixedHalf).map(o => (
                <CustomCardMedia
                  key={o.id}
                  {...o}
                  className={navImageClasses}
                />
              ))}
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              {destination.tours.slice(fixedHalf).map(o => (
                <CustomCardMedia
                  key={o.id}
                  {...o}
                  className={navImageClasses}
                />
              ))}
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    );
  };

  fetchDestination = async code => {
    this.setState({ isLoading: true });

    let response = await fetch(
      `/api/destinations/search/findByCode?code=${code}`
    );
    const destination = await response.json();
    response = await fetch(destination._links.tours.href);
    const tours = await response.json();

    this.setState({
      isLoading: false,
      destination: {
        tours: tours._embedded.tours,
        ...destination
      }
    });
  };
}

export default withStyles({ ...homePageStyle, ...imagesStyles })(
  DestinationPage
);
