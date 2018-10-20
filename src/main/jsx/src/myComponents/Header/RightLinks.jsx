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

function RightLinks({ ...props }) {
  const { classes } = props
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
          dropdownList={[
            <Link to="/destinations/sjo" className={classes.dropdownLink}>
              San José Downtown
            </Link>,
            <Link to="/destinations/cp" className={classes.dropdownLink}>
              Central Pacific
            </Link>,
            <Link to="/destinations/npp" className={classes.dropdownLink}>
              North Pacific (Puntarenas)
            </Link>,
            <Link to="/destinations/cc" className={classes.dropdownLink}>
              Caribbean Coast
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/rent-a-car" style={{ color: 'inherit' }}>
          <Button color="transparent" target="_blank" className={classes.navLink}>
            <DirectionsCar className={classes.icons} /> Rent A Car
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="about" style={{ color: 'inherit' }}>
          <Button color="transparent" target="_blank" className={classes.navLink}>
            <People className={classes.icons} /> About Us
          </Button>
        </Link>
      </ListItem>
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
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? 'top' : 'left'}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + ' fab fa-instagram'} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  )
}

export default withStyles(headerLinksStyle)(RightLinks)
