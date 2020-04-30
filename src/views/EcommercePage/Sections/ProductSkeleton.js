import React from "react";
import Card from "../../../components/Card/Card";
import CardHeader from "../../../components/Card/CardHeader";
import Carousel from "react-slick";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "../../../components/CustomButtons/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import GridItem from "../../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle";
import CustomLinearProgress from "../../../components/CustomLinearProgress/CustomLinearProgress";

const useStyles = makeStyles(styles);

export default function ProductSkeleton({
  children,
  isLoading,
  productsLoading
}) {
  const classes = useStyles();

  return isLoading
    ? [...Array(productsLoading).keys()].map(key => (
        <GridItem md={4} sm={6} key={key}>
          <Card plain product>
            <CardHeader noShadow image>
              <a href="#">
                <Carousel
                  dots={true}
                  infinite={true}
                  speed={1000}
                  slidesToShow={1}
                  slidesToScroll={1}
                  autoplay={true}
                >
                  <div className={classes.carouselPictureContainer}>
                    <img
                      src="https://cdn.syncfusion.com/content/images/common/placeholder.gif"
                      alt="Second slide"
                      className={`slick-image ${classes.carouselPicture}`}
                    />
                  </div>
                </Carousel>
              </a>
            </CardHeader>
            <CardBody plain className={classes.cardBody}>
              <CustomLinearProgress className={classes.titleSkeleton} />
            </CardBody>
            <CardFooter plain className={classes.justifyContentBetween}>
              <div className={classes.priceContainer}>
                <span className={classes.price}>
                  <span>
                    $ <CustomLinearProgress className={classes.priceSkeleton} />
                  </span>
                </span>
              </div>
              <Tooltip
                id="tooltip-top"
                placement="left"
                classes={{ tooltip: classes.tooltip }}
                title=""
              >
                <Button
                  justIcon
                  simple
                  disabled
                  color="github"
                  className={classes.pullRight}
                >
                  <ShoppingCart />
                </Button>
              </Tooltip>
            </CardFooter>
          </Card>
        </GridItem>
      ))
    : children;
}
