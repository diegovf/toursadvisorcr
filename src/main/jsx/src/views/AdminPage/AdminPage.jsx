import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Snackbar from "@material-ui/core/Snackbar";

// @material-ui/icons
import Dollar from "@material-ui/icons/AttachMoney";

// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/CustomHeaderLinks.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomSelect/CustomSelect.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// images
import parallaxBackground from "old-assets/img/backgrounds/sunset.jpg";

// styles
import adminPageStyle from "assets/jss/material-kit-react/views/adminPage.jsx";

// utils
import { readFileAsDataURL } from "utils/utils.js";

const dashboardRoutes = [];
class AdminPage extends React.Component {
  state = {
    open: false,
    destinations: [
      {
        value: "",
        text: "None",
        href: ""
      }
    ],
    tours: [
      {
        value: "",
        text: "None",
        href: "",
        picked: false
      }
    ],
    image: undefined
  };

  componentDidMount() {
    this.fetchDestinations();
    this.fetchTours();
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
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={parallaxBackground} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                {this.renderDestination(classes)}
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                {this.renderTour(classes)}
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                {this.renderHandPicked(classes)}
                {this.renderHandUnpicked(classes)}
              </GridItem>
            </GridContainer>
          </div>
        </div>

        {this.renderNotification()}
      </div>
    );
  }

  renderDestination = classes => {
    return (
      <Card>
        <form
          id={"destination-form"}
          className={classes.form}
          onSubmit={this.handleOnSubmitDestination}
        >
          <CardHeader color="primary" className={classes.cardHeader}>
            <h4>Destination</h4>
          </CardHeader>
          <CardBody>
            <CustomInput
              labelText="Code"
              id="code"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "text"
              }}
            />
            <CustomInput
              labelText="Name"
              id="name"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "text"
              }}
            />
            <CustomInput
              labelText="Description"
              id="description"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "text",
                multiline: true
              }}
            />
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <Button simple color="primary" size="lg" type="submit">
              Create
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  };

  renderTour = classes => {
    return (
      <Card>
        <form className={classes.form} onSubmit={this.handleOnSubmitTour}>
          <CardHeader color="primary" className={classes.cardHeader}>
            <h4>Tour</h4>
          </CardHeader>
          <CardBody>
            <CustomSelect
              labelText="Destination"
              id="destination"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              items={this.state.destinations}
            />
            <CustomInput
              labelText="Title"
              id="title"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "text"
              }}
            />
            <CustomInput
              labelText="Price"
              id="price"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "number",
                startAdornment: (
                  <InputAdornment position="start">
                    <Dollar className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Pdf"
              id="pdf"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "file"
              }}
            />
            <CustomInput
              labelText="Image"
              id="image"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "file"
              }}
            />
            <CustomInput
              labelText="Details"
              id="details"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "text",
                multiline: true
              }}
            />
            <CustomInput
              labelText="Description"
              id="description2"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              inputProps={{
                type: "text",
                multiline: true
              }}
            />
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <Button simple color="primary" size="lg" type="submit">
              Create
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  };

  renderHandPicked = classes => {
    return (
      <Card>
        <form className={classes.form} onSubmit={this.handleOnPick}>
          <CardHeader color="primary" className={classes.cardHeader}>
            <h4>Hand Picked</h4>
          </CardHeader>
          <CardBody>
            <CustomSelect
              labelText="Destination"
              id="pick"
              formControlProps={{
                fullWidth: true,
                required: true
              }}
              items={this.state.tours.filter(
                t =>
                  t.picked === false || t.picked === null || t.text === "None"
              )}
            />
          </CardBody>
          <CardFooter className={classes.cardFooter}>
            <Button simple color="primary" size="lg" type="submit">
              Pick
            </Button>
          </CardFooter>
        </form>
      </Card>
    );
  };

  renderHandUnpicked = classes => {
    return (
      <div style={{ marginTop: 50 }}>
        <Card>
          <form className={classes.form} onSubmit={this.handleOnUnpick}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4>Hand Unpicked</h4>
            </CardHeader>
            <CardBody>
              <CustomSelect
                labelText="Destination"
                id="unpick"
                formControlProps={{
                  fullWidth: true,
                  required: true
                }}
                items={this.state.tours.filter(
                  t => t.picked === true || t.text === "None"
                )}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button simple color="primary" size="lg" type="submit">
                Unpick
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    );
  };

  renderNotification = () => {
    const { open } = this.state;

    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={() => this.setState({ open: false })}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">Destination Added</span>}
      />
    );
  };

  fetchDestinations = async () => {
    let response = await fetch("/api/destinations");
    let body = await response.json();
    let destinations = body._embedded.destinations.map(dest => ({
      value: dest.code,
      text: dest.name,
      href: dest._links.self.href
    }));
    destinations = [
      {
        value: "",
        text: "None"
      },
      ...destinations
    ];
    this.setState({ destinations });
  };

  fetchTours = async () => {
    let response = await fetch("/api/tours");
    let body = await response.json();
    let tours = body._embedded.tours.map(tour => ({
      value: tour.id,
      text: tour.title,
      href: tour._links.self.href,
      picked: tour.picked
    }));
    tours = [
      {
        value: "",
        text: "None",
        picked: false
      },
      ...tours
    ];
    this.setState({ tours });
  };

  handleOnSubmitDestination = event => {
    event.stopPropagation();
    event.preventDefault();

    const body = {
      code: document.getElementById("code").value,
      name: document.getElementById("name").value,
      description: document.getElementById("description").value
    };

    fetch("/api/destinations", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(() => {
      this.fetchDestinations();
      this.setState({ open: true });
    });
  };

  handleOnSubmitTour = async event => {
    event.stopPropagation();
    event.preventDefault();
    const image = document.getElementById("image").files[0];
    const pdf = document.getElementById("pdf").files[0];
    const image64 = await readFileAsDataURL(image);
    const pdf64 = await readFileAsDataURL(pdf);
    const code = document.getElementById("destination").value;
    const destination = this.state.destinations.find(d => d.value === code);

    const body = {
      title: document.getElementById("title").value,
      price: document.getElementById("price").value,
      details: document.getElementById("details").value,
      description: document.getElementById("description2").value,
      image: image64,
      pdf: pdf64,
      destination: destination.href
    };

    fetch("/api/tours", {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(body)
    }).then(() => {
      this.setState({ open: true });
    });
  };

  handleOnPick = async event => {
    event.stopPropagation();
    event.preventDefault();

    const tourId = document.getElementById("pick").value;
    let tour = this.state.tours.find(t => t.value === Number(tourId));
    let response = await fetch(tour.href);
    response = await response.json();
    tour = {
      ...response,
      picked: true
    };

    fetch(tour._links.self.href, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tour)
    }).then(() => {
      this.fetchTours();
      this.setState({ open: true });
    });
  };

  handleOnUnpick = async event => {
    event.stopPropagation();
    event.preventDefault();

    const tourId = document.getElementById("unpick").value;
    let tour = this.state.tours.find(t => t.value === Number(tourId));
    let response = await fetch(tour.href);
    response = await response.json();
    tour = {
      ...response,
      picked: false
    };

    fetch(tour._links.self.href, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tour)
    }).then(() => {
      this.fetchTours();
      this.setState({ open: true });
    });
  };
}

export default withStyles(adminPageStyle)(AdminPage);
