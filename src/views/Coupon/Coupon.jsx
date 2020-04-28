import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Spotlight from "../Components/Spotlight.jsx";

import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";

// Sections for this page
import Coupons from "./Sections/SectionCoupons.jsx";
import SocialMedia from "../Components/SocialMedia.jsx";


// const dashboardRoutes = [];

class Coupon extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 300);
    // document.body.scrollTop = 0;
  }
  render() {
    const { classes} = this.props;
    return (
      <div>
        <Spotlight />
        {/* <Header /> */}
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <Coupons />
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Coupon);
