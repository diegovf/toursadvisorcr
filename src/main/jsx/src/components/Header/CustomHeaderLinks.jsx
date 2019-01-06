/*eslint-disable*/
import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, DirectionsCar, People } from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import Button from 'components/CustomButtons/Button.jsx'

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx'

/**
 * @todo add twitter and instagram
 */
class CustomHeaderLinks extends React.Component {
  state = {
    destinations: [],
  }

  componentDidMount() {
    this.fetchDestinations()
  }
  render() {
    const { classes } = this.props
    const { destinations } = this.state

    return (
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            buttonText="Destinations"
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            buttonIcon={Apps}
            dropdownList={destinations.map(d => this.renderDestinationLink(d, classes))}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button color="transparent" target="_blank" className={classes.navLink}>
            <Link to="/rent-a-car" style={{ color: 'inherit' }}>
              <DirectionsCar className={classes.icons} /> Rent A Car
            </Link>
          </Button>
        </ListItem>
        {/* <ListItem className={classes.listItem}>
          <Button color="transparent" target="_blank" className={classes.navLink}>
            <Link to="/about-us" style={{ color: 'inherit' }}>
              <People className={classes.icons} /> About Us
            </Link>
          </Button>
        </ListItem> */}
        {/* <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-twitter"
            title="Follow us on twitter"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              href="https://twitter.com/CreativeTim"
              target="_blank"
              color="transparent"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-twitter'} />
            </Button>
          </Tooltip>
        </ListItem> */}
        <ListItem className={classes.listItem}>
          <Tooltip
            id="instagram-facebook"
            title="Follow us on facebook"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              color="transparent"
              href="https://www.facebook.com/Excursions-ToursAdvisor-1595368710686144/"
              target="_blank"
              className={classes.navLink}
            >
              <i className={classes.socialIcons + ' fab fa-facebook'} />
            </Button>
          </Tooltip>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Tooltip
            id="admin-tooltip"
            title="Admin"
            placement={window.innerWidth > 959 ? 'top' : 'left'}
            classes={{ tooltip: classes.tooltip }}
          >
            <Button color="transparent" target="_blank" className={classes.navLink}>
              <Link to="/login" style={{ color: 'inherit' }}>
                <i className={classes.socialIcons + ' fas fa-sign-in-alt'} />
              </Link>
            </Button>
          </Tooltip>
        </ListItem>
      </List>
    )
  }

  fetchDestinations = async () => {
    const response = await fetch('/api/destinations')
    const body = await response.json()
    const destinations = body._embedded.destinations.map(dest => ({
      name: dest.name,
      code: dest.code,
    }))
    this.setState({ destinations })
  }
  renderDestinationLink = (destination, classes) => {
    return (
      <Link to={`/destinations/${destination.code}`} className={classes.dropdownLink}>
        {destination.name}
      </Link>
    )
  }
}

export default withStyles(headerLinksStyle)(CustomHeaderLinks)
