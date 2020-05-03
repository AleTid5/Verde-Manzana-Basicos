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
  const [
    imageToDisplayFullscreen,
    setImageToDisplayFullscreen
  ] = React.useState(null);

  const FullscreenCarousel = () => {
    React.useEffect(() => {
      const escFunction = event => {
        event.preventDefault();
        if (event.keyCode === 27) {
          document.body.style.overflow = "auto";
          setImageToDisplayFullscreen(null);
        }
      };

      if (imageToDisplayFullscreen !== null) {
        document.addEventListener("keydown", escFunction, false);
      }

      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }, [imageToDisplayFullscreen]);

    return (
      imageToDisplayFullscreen !== null && (
        <div className={classes.fullscreenCarousel}>
          <div
            className={classes.closable}
            onClick={() => {
              document.body.style.overflow = "auto";
              setImageToDisplayFullscreen(null);
            }}
          />
          <div
            className={classes.closeFullscreen}
            onClick={() => {
              document.body.style.overflow = "auto";
              setImageToDisplayFullscreen(null);
            }}
          >
            <Close />
          </div>
          <img
            src={product.pictures[imageToDisplayFullscreen].url}
            alt="..."
            className={classes.fullscreenImage}
          />
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
            autoplay={!imageToDisplayFullscreen}
          >
            {product.pictures.map((picture, key) => (
              <div
                key={key}
                className={classes.carouselPictureContainer}
                onClick={() => {
                  document.body.style.overflow = "hidden";
                  setImageToDisplayFullscreen(key);
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
