import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components

import Spotlight from "../Components/Spotlight.jsx";


import landingPageStyle from "assets/jss/material-kit-pro-react/views/blogPostsPageStyle.jsx";

// Sections for this page
import Specials from "./Sections/SectionPhotos.jsx";
import SocialMedia from "../Components/SocialMedia.jsx";

class Gallery extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 300);
    // document.body.scrollTop = 0;

    // document.getElementById('gallery-div').scrollIntoView({ behavior: 'auto'})

  }
  render() {
    const { classes} = this.props;
    return (
      <div>
        <Spotlight />
        <div className={classNames(classes.main, classes.mainRaised)} id='gallery-div'>
          <div className={classes.container}>
            <Specials />
            <SocialMedia />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(Gallery);
