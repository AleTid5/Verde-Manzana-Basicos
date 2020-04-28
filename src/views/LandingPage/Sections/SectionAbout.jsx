import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

//Data
import aboutData from '../../../db/AboutUs';


import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class AboutUs extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section} >
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={8}>
            <h2 className={classes.title}>About Us</h2>
            <h5 className={classes.description}>
              {aboutData.aboutUs}
            </h5>
          </GridItem>
        </GridContainer>
      < div >
        </div >
      </div >
    );
  }
}

export default withStyles(productStyle)(AboutUs);
