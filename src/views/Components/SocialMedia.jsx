import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

//import data
import SocialLinks from '../../db/Social';




import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";

class Media extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center" >
          <GridItem xs={12} sm={8} md={8} style={{ marginBottom: '50px' }} >
            <h4 className={classes.title}>Thank you for visiting us!</h4>

            <Button round color="google" style={{ width: '150px'}}
              href={SocialLinks.google} 
              target="_blank"
            >
              <i
                className={"fab fa-google"}
              />{" "}
              Google
            </Button>
            <Button round color="facebook" style={{ width: '150px'}}
              href={SocialLinks.facebook}
              target="_blank"
            >
              <i
                className={"fab fa-facebook"}
              />{" "}
              FaceBook
            </Button>
            <Button round style={{backgroundColor: '#FCF3CF', color: 'black', width: '150px'}}
              href={SocialLinks.yelp}
              target="_blank"
            >
              <i
                className={"fab fa-yelp"} style={{color: 'red'}}
              />{" "}
              yelp
            </Button>
          </GridItem>
        </GridContainer>
      </div >
    );
  }
}

export default withStyles(productStyle)(Media);