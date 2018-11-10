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
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/CustomHeaderLinks.jsx";
import CircularProgress from "@material-ui/core/CircularProgress";

import Carousel from "components/Carousel/Carousel.jsx";
import StringToList from "components/StringToList/StringToList.jsx";

// styles
import homePageStyle from "assets/jss/material-kit-react/views/homePage.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
import Typography from "@material-ui/core/Typography";

const dashboardRoutes = [];

class DestinationPage extends React.Component {
  state = {
    isLoading: false,
    tour: {}
  };

  componentDidMount() {
    const { match } = this.props;
    this.fetchTour(match.params.tour);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.tour !== this.props.match.params.tour) {
      this.fetchTour(nextProps.match.params.tour);
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const { tour, isLoading } = this.state;
    console.log("tour", tour);
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
            {this.renderPageHeader(tour, classes)}
            <GridContainer
              justify="center"
              spacing={16}
              style={{ paddingBottom: 25 }}
            >
              {tour.pictures && <Carousel pictures={tour.pictures} />}

              <GridItem xs={12} sm={12} md={8}>
                {tour.longDescription &&
                  this.renderDescription(tour.longDescription)}
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                {tour.details && (
                  <StringToList title="Details" string={tour.details} />
                )}
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
                {tour.recommendations && (
                  <StringToList
                    title="Recommendations"
                    string={tour.recommendations}
                  />
                )}
              </GridItem>
            </GridContainer>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  renderPageHeader = (tour, classes) => {
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
                <h2 className={classes.title}>
                  <a id="title" />
                  {tour.title}
                </h2>
              </div>
            )}
          </div>
        </GridItem>
      </GridContainer>
    );
  };

  renderDescription = description => {
    return <Typography paragraph>{description}</Typography>;
  };

  fetchTour = async id => {
    this.setState({ isLoading: true });
    let response = await fetch(`/api/tours/${id}`);
    const tour = await response.json();
    this.setState({
      isLoading: false,
      tour
    });
  };
}

export default withStyles({ ...homePageStyle, ...imagesStyles })(
  DestinationPage
);
