import React, { Fragment } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import Button from "components/CustomButtons/Button.jsx";

import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";

class TourCard extends React.Component {
  state = { expanded: false };

  render() {
    const {
      title,
      shortDescription,
      classes,
      className,
      price,
      pictures
    } = this.props;

    return (
      <Card className={className}>
        <CardMedia
          style={{
            height: 0,
            paddingTop: "56.25%"
          }}
          image={pictures[0]}
          title={title}
        />
        <CardContent>
          <h4 className={classes.title}>{title}</h4>
          {shortDescription && (
            <Typography paragraph>{shortDescription}</Typography>
          )}
        </CardContent>
        <CardActions
          style={{ justifyContent: price ? "space-between" : "flex-end" }}
        >
          {price && <Typography variant="title">{"$" + price}</Typography>}
          <Button size="sm" color="primary" onClick={this.handleOnMore}>
            More Details
          </Button>
        </CardActions>
      </Card>
    );
  }

  handleOnMore = () => {
    const { history, id } = this.props;
    console.log("history: ", history);
    history.push(`/tours/${id}`);
  };
}

TourCard.propTypes = {
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  more: PropTypes.array,
  price: PropTypes.number,
  pdf: PropTypes.string,
  details: PropTypes.string,
  history: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default withStyles(typographyStyle)(TourCard);
