import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import styles from "./styles";

const StringToList = props => {
  const { title, string, classes } = props;

  return (
    <List
      dense={true}
      subheader={
        title ? (
          <ListSubheader className={classes.subheader}>{title}</ListSubheader>
        ) : (
          undefined
        )
      }
    >
      {string.split("\n").map((detail, idx) => {
        return (
          <ListItem
            key={"detail_" + idx}
            dense={true}
            classes={{ dense: classes.dense }}
          >
            <ListItemText
              primary={detail}
              primaryTypographyProps={{ align: "center" }}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

StringToList.propTypes = {
  title: PropTypes.string.isRequired,
  string: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StringToList);
