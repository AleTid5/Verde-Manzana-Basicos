import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components

import Spotlight from "../Components/Spotlight.jsx";


// sections for this page
import ServiceList from "./Sections/ServiceList1";

import blogPostsPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";
import SocialMedia from "../Components/SocialMedia.jsx";

class Services extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 300);
    // document.body.scrollTop = 0;


  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Spotlight />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ServiceList />
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(blogPostsPageStyle)(Services);
