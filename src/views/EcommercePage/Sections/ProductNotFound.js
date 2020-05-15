import React from "react";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import Carousel from "react-slick";
import CardBody from "../../../components/Card/CardBody";
import Badge from "../../../components/Badge/Badge";
import CardFooter from "../../../components/Card/CardFooter";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "../../../components/CustomButtons/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import GridItem from "../../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle";
import { GoogleAnalyticsContext } from "../../../components/Contexts/GoogleAnalyticsContext";
import PropTypes from "prop-types";
import mainIcon from "../../../assets/img/MainIcon.png";

const useStyles = makeStyles(styles);

export default function ProductNotFound() {
  const classes = useStyles();

  return (
    <>
      <GridItem xs={3} />
      <GridItem xs={6}>
        <Card plain product>
          <CardHeader noShadow image>
            <Carousel>
              <div className={classes.productNotFoundCarouselPictureContainer}>
                <img
                  src={mainIcon}
                  alt="Second slide"
                  className={`slick-image ${classes.carouselPicture} ${classes.productNotFoundImage}`}
                  width="100px"
                />
              </div>
            </Carousel>
          </CardHeader>
          <CardBody plain className={classes.cardBody}>
            <h4 className={classes.cardTitle}>Ups... ¡Lo sentimos!</h4>
            <p className={classes.description}>
              No hemos podido hallar éste tipo de producto.
              <br />
              Por favor, vuelva a intentarlo.
            </p>
          </CardBody>
        </Card>
      </GridItem>
    </>
  );
}
