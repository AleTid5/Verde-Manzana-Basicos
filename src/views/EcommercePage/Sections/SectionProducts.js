import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Cached from "@material-ui/icons/Cached";
import Subject from "@material-ui/icons/Subject";
import Check from "@material-ui/icons/Check";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import suit1 from "assets/img/examples/suit-1.jpg";
import suit2 from "assets/img/examples/suit-2.jpg";
import suit3 from "assets/img/examples/suit-3.jpg";
import suit4 from "assets/img/examples/suit-4.jpg";
import suit5 from "assets/img/examples/suit-5.jpg";
import suit6 from "assets/img/examples/suit-6.jpg";
import color1 from "assets/img/examples/color1.jpg";
import color3 from "assets/img/examples/color3.jpg";
import color2 from "assets/img/examples/color2.jpg";
import dg3 from "assets/img/dg3.jpg";
import dg1 from "assets/img/dg1.jpg";

// Server
import { getProducts } from "../../../api/EcommerceServer";

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionProducts() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProducts().then(products => setProducts(products));
  }, []);

  React.useEffect(() => {
    console.log(products);
  }, [products]);

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Nuestros productos</h2>
        <GridContainer>
          <GridItem md={12} sm={12}>
            <GridContainer>
              {products.map((product, key) => (
                <GridItem md={3} sm={3} key={key}>
                  <Card plain product>
                    <CardHeader noShadow image>
                      <a href={product.permalink}>
                        <img
                          src={product.pictures[0].url}
                          alt=".."
                          height="200px"
                        />
                      </a>
                    </CardHeader>
                    <CardBody plain>
                      <a href={product.permalink}>
                        <h4 className={classes.cardTitle}>{product.title}</h4>
                      </a>
                    </CardBody>
                    <CardFooter plain className={classes.justifyContentBetween}>
                      <div className={classes.priceContainer}>
                        <span className={classes.price}>$ {product.price}</span>
                      </div>
                      <div className={classes.bluePill}>Envío normal</div>
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
                          onClick={() =>
                            (window.location.href = product.permalink)
                          }
                        >
                          <ShoppingCart />
                        </Button>
                      </Tooltip>
                    </CardFooter>
                  </Card>
                </GridItem>
              ))}
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
