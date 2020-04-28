import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

//Data
import aboutData from '../../../db/AboutUs';

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.jsx";

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

class WeOffer extends React.Component {
  state = {
    services: []
  }

  componentDidMount() {
    this.setState( { services: aboutData.weOffer })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
                }`}
            >
              <h2 className={classes.title}>We Offer</h2>
            </GridItem>
          </GridContainer>

          <GridContainer>

            {this.state.services.map(service => (

              <GridItem xs={12} sm={3} md={3}>
                <Card plain>
                  <CardHeader image>
                    <div>
                      <img src={service.img} alt="..." />
                    </div>
                    <div className={classes.imgCardOverlay}>
                      <h4
                        className={classes.cardTitle}
                        style={{
                          backgroundColor: 'white',
                          opacity: '0.8',
                          fontSize: '20px',
                          color: 'black',
                          position: 'absolute',
                          margin: 'auto',
                          left: 0, right: 0,
                          bottom: '10px',
                          padding: '5px'
                        }}
                      >
                        <a href='/service'><strong>{service.name}</strong></a>
                      </h4>
                    </div>
                  </CardHeader>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
      </div>

    );
  }
}

export default withStyles(style)(WeOffer);
