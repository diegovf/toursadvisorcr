import React, { Fragment } from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";

import Button from "components/CustomButtons/Button.jsx";

import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import { openBase64PDF } from "utils/utils";

class CustomCardMedia extends React.Component {
  state = { expanded: false };

  render() {
    const {
      title,
      description,
      image,
      details,
      classes,
      className,
      price,
      pdf
    } = this.props;

    return (
      <Card className={className}>
        <CardMedia
          style={{
            height: 0,
            paddingTop: "56.25%"
          }}
          image={image}
          title={title}
        />
        <CardContent>
          <h4 className={classes.title}>{title}</h4>
          {description && <Typography paragraph>{description}</Typography>}
        </CardContent>
        <CardActions
          style={{ justifyContent: price ? "space-between" : "flex-end" }}
        >
          {price && <Typography variant="title">{"$" + price}</Typography>}
          <Button size="sm" color="primary" onClick={this.handleOnMore}>
            More
          </Button>
        </CardActions>
        {details && (
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <Fragment>
              <CardContent>
                <Typography paragraph>
                  {details &&
                    details.split(".").map((i, idx) => {
                      return (
                        <Fragment key={"frg" + idx}>
                          {i}
                          <br />
                        </Fragment>
                      );
                    })}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="sm"
                  // href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  onClick={() => openBase64PDF(pdf)}
                >
                  <i className="fas fa-file-pdf" />
                  Even More
                </Button>
              </CardActions>
            </Fragment>
          </Collapse>
        )}
      </Card>
    );
  }

  handleOnMore = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
}

CustomCardMedia.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  more: PropTypes.array,
  price: PropTypes.number,
  pdf: PropTypes.string,
  details: PropTypes.string
};

export default withStyles(typographyStyle)(CustomCardMedia);
