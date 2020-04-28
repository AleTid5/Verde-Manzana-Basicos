import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.jsx";


import salonPhoto from '../../db/salonPhoto';


class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
        <GridContainer justify='center'>
          <GridItem xs={12} sm={10} md={10} className={classes.marginAuto} style={{ textAlign: 'center', marginTop: '25px' }}>
            <h4 className={Card.title}><strong>Welcome to Our Salon!</strong></h4>
            <Card>

              <Carousel {...settings}>
                {salonPhoto.map(image => (

                  <div key={image.id}>
                    <img
                      src={image.image}
                      // alt="First slide"
                      className="slick-image"
                    />
                    {/* <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />Yellowstone
                          National Park, United States
                      </h4>
                      </div> */}
                  </div>
                ))}

              </Carousel>

            </Card>
          </GridItem>
        </GridContainer>

    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
