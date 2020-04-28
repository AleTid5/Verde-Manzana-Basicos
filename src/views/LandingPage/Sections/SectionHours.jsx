import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import OpenHrs from "@material-ui/icons/EventAvailable";
import ClosedHrs from "@material-ui/icons/EventBusy";
import WalkIn from "@material-ui/icons/TagFaces";
import CreditCard from "@material-ui/icons/CreditCard";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

// page style
import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";

//Data
import aboutData from '../../../db/AboutUs';
import elementStyle from '../../../db/ElementStyles';

class SectionContacts extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    
    const phoneNum = 'tel:' + aboutData.phone;
    console.log(phoneNum)

    return (
      <div className="cd-section" {...rest}  style={{ marginBottom: '50px'}}>
        {/* Contact us 1 START */}
        <div
          className={`${classes.contacts} ${classes.section}`}
          style={{ backgroundImage: `url(${aboutData.salonPhoto})` }}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={5} md={5} className={classes.mlAuto} >
                <Card className={classes.card1}>
                  <CardHeader
                    contact
                    color={elementStyle.btnColor}
                    className={classes.textCenter}
                  >
                    <h4 className={classes.cardTitle}>Business Hours</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        {aboutData.busHrs.map(busHr => (
                          <InfoArea
                          className={classes.infoArea2}
                          title={
                            <span>
                              {busHr.dates} <br />
                              {busHr.time}
                            </span>
                          }

                          icon={busHr.time === "Closed" ? ClosedHrs : OpenHrs }
                          iconColor={elementStyle.iconColor}
                        />
                        ))}
                        
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <InfoArea
                          className={classes.infoArea2}
                          title={<h4>Walks-In Welcome</h4>}
                          icon={WalkIn}
                          iconColor={elementStyle.iconColor}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                        <InfoArea
                          className={classes.infoArea2}
                          title={<h4>We Accept Credit Cards</h4>}
                          icon={CreditCard}
                          iconColor={elementStyle.iconColor}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                  <CardFooter className={classes.justifyContentBetween}>

                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={5} md={5}>
                <InfoArea
                  className={classes.infoArea}
                  title="Our Location"
                  description={
                    <div>
                      <strong>
                        <span>
                          {aboutData.address.street},
                            <br /> {aboutData.address.city}, {aboutData.address.state}. {aboutData.address.zipCode}
                          </span>
                      </strong>
                      <br></br>
                      <Button
                        round
                        color={elementStyle.btnColor}
                        size="sm"
                        href={aboutData.addressLink}
                        target="_blank"
                        rel={aboutData.addressLink}
                      >
                        Get Directions
                    </Button>
                    </div>
                  }
                  icon={PinDrop}
                />


                <InfoArea
                  className={classes.infoArea}
                  title="Give us a ring"
                  description={
                    <div>
                      <strong>
                        <span>
                          Phone Number
                        <br /> {aboutData.phone}
                      </span>
                      </strong>
                      <br></br>
                      <Button
                        round
                        color={elementStyle.btnColor}
                        size="sm"
                        href={phoneNum}
                        rel="noopener noreferrer"
                      >
                        Call Now</Button>

                    </div>
                  }
                  icon={Phone}
                />

              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(contactsStyle)(SectionContacts);
