import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";

import carouselStyle from "./carouselStyle.jsx";

class CustomCarousel extends React.Component {
  render() {
    const { classes, pictures } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={8} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {pictures.map(this.renderPicture)}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }

  renderPicture = (picture, idx) => {
    const { classes } = this.props;

    return (
      <div key={"pic" + idx} className={classes.imageContainer}>
        <img
          src={picture}
          alt="First slide"
          className="slick-image"
          style={{ height: 300 }}
        />
      </div>
    );
  };
}

export default withStyles(carouselStyle)(CustomCarousel);
