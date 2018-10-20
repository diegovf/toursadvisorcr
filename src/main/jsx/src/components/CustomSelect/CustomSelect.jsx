import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import customInputStyle from "assets/jss/material-kit-react/components/customInputStyle.jsx";

/**
 * @todo fix underline color
 */
class CustomSelect extends React.Component {
  state = {
    destination: ""
  };

  render() {
    const {
      classes,
      formControlProps,
      labelText,
      id,
      labelProps,
      error,
      white,
      inputRootCustomClasses,
      success,
      items
    } = this.props;

    const labelClasses = classNames({
      [" " + classes.labelRootError]: error,
      [" " + classes.labelRootSuccess]: success && !error
    });
    const underlineClasses = classNames({
      [classes.underlineError]: error,
      [classes.underlineSuccess]: success && !error,
      [classes.underline]: false,
      [classes.whiteUnderline]: white
    });
    const marginTop = classNames({
      [inputRootCustomClasses]: inputRootCustomClasses !== undefined
    });
    const inputClasses = classNames({
      [classes.input]: false,
      [classes.whiteInput]: white
    });
    var formControlClasses;
    if (formControlProps !== undefined) {
      formControlClasses = classNames(
        formControlProps.className,
        classes.formControl
      );
    } else {
      formControlClasses = classes.formControl;
    }
    return (
      <FormControl {...formControlProps} className={formControlClasses}>
        {labelText !== undefined ? (
          <InputLabel
            className={classes.labelRoot + " " + labelClasses}
            htmlFor={id}
            {...labelProps}
          >
            {labelText}
          </InputLabel>
        ) : null}
        <Select
          classes={{
            root: marginTop,
            disabled: classes.disabled
          }}
          id={id}
          value={this.state.destination}
          onChange={this.handleChange}
          inputProps={{
            name: "destination",
            classes: {
              input: inputClasses,
              root: marginTop,
              disabled: classes.disabled,
              underline: underlineClasses
            }
          }}
        >
          {items.map(({ value, text }) => {
            if (value === "") {
              return (
                <MenuItem key={value} value="">
                  <em>None</em>
                </MenuItem>
              );
            } else {
              return (
                <MenuItem key={value} value={value}>
                  {text}
                </MenuItem>
              );
            }
          })}
        </Select>
      </FormControl>
    );
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

CustomSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(customInputStyle)(CustomSelect);
