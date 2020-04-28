
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


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
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";


//Components
import SalonPhoto from './salonGallery.jsx';
import ServiceBgImg from 'assets/img/salon/serviceBg.jpg';
import SocialMedia from "../Components/SocialMedia.jsx";

//Data
import aboutData from '../../db/AboutUs';
import elementStyle from '../../db/ElementStyles';

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{ lat: 28.9085061, lng: -81.9717989 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
      }}
    >
      <Marker position={{ lat: 28.9085061, lng: -81.9717989 }} label={aboutData.salonName} />

    </GoogleMap>
  ))
);

class Location extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 5);
    document.body.scrollTop = 0;
  }
  render() {

    const { classes } = this.props;
    const phoneNum = 'tel:' + aboutData.phone;


    return (
      <div>
        {/* <Header /> */}
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBCAujiH1lsqv_cLpTQRZS9L6h4cNPcJ-s"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)} >
          <div className={classes.contactContent}
          >
            <div className={classes.container}>
              {/* <h2 className={classes.title}>Our Location</h2> */}
              <GridContainer>
                <GridItem md={5} sm={5} className={classes}>
                  <Card style={{ backgroundImage: `url(${ServiceBgImg})` }}>
                    <CardHeader
                      contact
                      color={elementStyle.btnColor}
                      className={classes.textCenter}
                    >
                      <h4 className={classes.cardTitle}>Contact Us</h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem>
                          <InfoArea
                            className={classes.info}
                            title={
                              <div>
                                <span>
                                  {aboutData.address.street},
                                  <br /> {aboutData.address.city}, {aboutData.address.state}. {aboutData.address.zipCode}
                                </span>
                              </div>
                            }
                            description={
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
                            }
                            icon={PinDrop}
                            iconColor={elementStyle.iconColor}
                          />
                          <InfoArea
                            className={classes.info}
                            title={aboutData.phone}
                            description={
                              <Button
                                round
                                color={elementStyle.btnColor}
                                size="sm"
                                href={phoneNum}
                                rel="noopener noreferrer"
                              >
                                Call Now</Button>
                            }
                            icon={Phone}
                            iconColor={elementStyle.iconColor}
                          />
                          <InfoArea
                            className={classes.info}
                            title="Walks-In Welcome"
                            icon={WalkIn}
                            iconColor={elementStyle.iconColor}
                          />
                          <InfoArea
                            className={classes.info}
                            title="We Accept Credit Cards"
                            icon={CreditCard}
                            iconColor={elementStyle.iconColor}
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem md={7} sm={7} className={classes.mlAuto}>
                  <SalonPhoto />
                </GridItem>
              </GridContainer>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(contactUsStyle)(Location);
