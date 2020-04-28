import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

//Data
import aboutData from '../../../db/AboutUs';
import ourSpecials from '../../../db/OurSpecials';

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";
import { FormHelperText } from "@material-ui/core";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class OurSpecial extends React.Component {
  state = {
    specials: []
  }

  componentDidMount() {
    this.setState({ specials: ourSpecials })
  }

  render() {
    const { classes } = this.props;

    // const toggleHandler = () => {
    //   let showDetail = document.getElementById();
    //   showDetail.classList.toggle();
    // }

    return (
      <div className={classes.section}>
        <GridContainer>
          <GridItem xs={12} sm={8} md={8} className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
          >
            <h2 className={classes.title} style={{ marginBottom: 0 }}>Our Specials</h2>
          </GridItem>
        </GridContainer>

        <GridContainer style={{ marginBottom: 0 }}>
          {this.state.specials.map(special => (
            <GridItem xs={12} sm={4} md={4}>
              <Card
                raised
                background
                style={{
                  backgroundImage: "url(" + special.img + ")",
                }}
              >
                <CardBody background>
                  <h3 className={classes.cardTitle}>
                    {special.service}
                  </h3>
                  <p className={classes.category}>
                    {special.description}
                  </p>

                </CardBody>
              </Card>
            </GridItem>

          ))}

          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={`${classes.mlAuto} ${classes.mrAuto} ${
              classes.textCenter
              }`}
            style={{ marginBottom: '50px' }}
          >
            <Button
              round
              color="default"
              size="sm"
              href="/service"
              rel="noopener noreferrer"
            >View Our Services
              </Button>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(OurSpecial);
