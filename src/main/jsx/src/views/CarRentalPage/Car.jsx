import { List, ListItem } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Done } from "@material-ui/icons";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";

// styles
import navPillsStyle from "assets/jss/material-kit-react/components/navPillsStyle.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles";
class Car extends React.Component {
  render() {
    const { classes, horizontal, car } = this.props;

    return (
      <GridContainer>
        <GridItem {...horizontal.tabsGrid}>
          {this.renderImage(car, classes)}
        </GridItem>
        <GridItem {...horizontal.contentGrid}>
          {this.renderSpecifications(car)}
        </GridItem>
      </GridContainer>
    );
  }

  renderImage = (car, classes) => {
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRounded,
      classes.imgFluid
    );

    return (
      <React.Fragment>
        {/* <h4>Rounded Raised</h4> */}
        <img src={car.image} alt="..." className={imageClasses} />
      </React.Fragment>
    );
  };

  renderSpecifications = car => {
    const { name, specifications } = car;

    return (
      <div style={{ color: "#3c4858" }}>
        <h3> {name} </h3>
        <List
          style={{
            display: "flex ",
            flexFlow: "row wrap",
            justifyContent: "space-between"
          }}
        >
          {specifications.map((spec, idx) => (
            <ListItem
              key={"spec-" + idx}
              dense
              style={{ width: "auto", justifyContent: "center" }}
            >
              <Done /> {spec}
            </ListItem>
          ))}
        </List>
      </div>
    );
  };
}

Car.defaultProps = {
  active: 0,
  color: "primary"
};

Car.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.func,
      tabContent: PropTypes.node
    })
  ),
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose"
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};

export default withStyles({ ...navPillsStyle, ...imagesStyles })(Car);
