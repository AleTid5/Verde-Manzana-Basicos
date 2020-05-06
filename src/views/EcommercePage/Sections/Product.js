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
import Close from "@material-ui/icons/Close";
import GridItem from "../../../components/Grid/GridItem";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../../assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle";
import { GoogleAnalyticsContext } from "../../../components/Contexts/GoogleAnalyticsContext";
import PropTypes from "prop-types";

const useStyles = makeStyles(styles);

export default function Product({ product }) {
  const classes = useStyles();
  const { pushEvent } = React.useContext(GoogleAnalyticsContext);
  const [initialFullscreenSlide, setInitialFullscreenSlide] = React.useState(
    null
  );

  const FullscreenCarousel = () => {
    React.useEffect(() => {
      const escFunction = event => {
        event.preventDefault();
        if (event.keyCode === 27) {
          document.body.style.overflow = "auto";
          setInitialFullscreenSlide(null);
        }
      };

      if (initialFullscreenSlide !== null) {
        document.addEventListener("keydown", escFunction, false);
        document.getElementById("main-header").style.display = "none";
      }

      return () => {
        document.getElementById("main-header").style.display = "block";
        document.removeEventListener("keydown", escFunction, false);
      };
    }, [initialFullscreenSlide]);

    return (
      initialFullscreenSlide !== null && (
        <div className={classes.fullscreenCarousel}>
          <div
            className={classes.closable}
            onClick={() => {
              document.body.style.overflow = "auto";
              setInitialFullscreenSlide(null);
            }}
          >
            <div className={classes.closeFullscreen}>
              <Close />
            </div>
          </div>
          <div
            className={`fullscreenImage ${classes.fullscreenCarouselContainer}`}
          >
            <Carousel
              dots={true}
              infinite={true}
              speed={1000}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={false}
              initialSlide={initialFullscreenSlide}
            >
              {product.pictures.map((picture, key) => (
                <div key={key} className={classes.fullscreenImageContainer}>
                  <img
                    src={picture.url}
                    alt="..."
                    className={`slick-image ${classes.fullscreenImage}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )
    );
  };

  return (
    <GridItem md={4} sm={6}>
      <FullscreenCarousel />
      <Card plain product>
        <CardHeader noShadow image>
          <Carousel
            dots={true}
            infinite={true}
            speed={1000}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={!initialFullscreenSlide}
          >
            {product.pictures.map((picture, key) => (
              <div
                key={key}
                className={classes.carouselPictureContainer}
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setInitialFullscreenSlide(key);
                }}
              >
                <img
                  src={picture.url}
                  alt="Second slide"
                  className={`slick-image ${classes.carouselPicture}`}
                />
              </div>
            ))}
          </Carousel>
        </CardHeader>
        <CardBody plain className={classes.cardBody}>
          <h4 className={classes.cardTitle}>{product.title}</h4>
          <p className={classes.description}>
            <Badge color="info" className={classes.blueBadge}>
              Envío con normalidad
            </Badge>
          </p>
        </CardBody>
        <CardFooter plain className={classes.justifyContentBetween}>
          <div className={classes.priceContainer}>
            <span className={classes.price}>${product.price}</span>
          </div>
          <Tooltip
            id="tooltip-top"
            title="¡Lo quiero!"
            placement="left"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button
              justIcon
              simple
              color="rose"
              className={classes.pullRight}
              onClick={() => {
                pushEvent(
                  "Section Products | Product Clicked",
                  product.permalink.substr(product.permalink.indexOf(".ar") + 4)
                );

                window.location.href = product.permalink;
              }}
            >
              <ShoppingCart />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </GridItem>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    permalink: PropTypes.string.isRequired,
    pictures: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
};

Product.defaultProps = {
  product: {
    permalink: null,
    pictures: [],
    price: null,
    title: null
  }
};
